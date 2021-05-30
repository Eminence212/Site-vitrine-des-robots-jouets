import Loader from "./Loader";
import Robot from "./Robot";
const CardList = ({ listRobots, isLoading }) => {
  return (
    <div className="row card-list row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
      {listRobots.length === 0 && isLoading ? (
        <Loader />
      ) : listRobots.length === 0 && !isLoading ? (
        <p className="information">Aucune information trouvée !</p>
      ) : (
        listRobots.map((user) => {
          return <Robot user={user} key={user.id} id={user.id} />;
        })
      )}
    </div>
  );
};
export default CardList;