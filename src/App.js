import React, { useState, useEffect } from 'react';
import CardList from "./componnents/CardList";
import Searchbox from "./componnents/Searchbox";
import Title from "./componnents/Title";
import './css/style.css'

const App = () => {
  const [Robots, setRobots] = useState([])
  const [listRobots, setListobots] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  //Chargement de donnée depuis l'API;
  let image = 'https://robohash.org/'
  let requete = "https://jsonplaceholder.typicode.com/users";
  //
  useEffect(() => {
    try {
      fetch(requete)
        .then(function (res) {
          res.json()
            .then(function (data) {
              let newRobots = data.map(user => {
                return {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  image: image + user.id,
                  address: user.address,
                  phone: user.phone,
                  website: user.website,
                  company : user.company
                };
              })
              setRobots(newRobots)
              setListobots(newRobots)
            })
        })
    } catch (error) {
      console.log(error);
    }
  }, []);
  let handleChange = (input) => {
    try {
      let valeur = input.target.value.toLowerCase()
      findRobots(valeur)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }

  }
  let findRobots = (value) => {
    try {
      let regexp = new RegExp(value, '');
      let newRobotFilter = Robots.filter(element => {
        return regexp.test(element.name.toLowerCase())
      })
      setListobots(newRobotFilter)
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="container container-fluid">
      <Title />
      <Searchbox onChange={handleChange} />
      <CardList listRobots={listRobots} isLoading={isLoading} />
    </div>
  );
}

export default App;
