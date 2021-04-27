import Loader from "./Loader";
import Robot from "./Robot";
const CardList = ({ listRobots }) => {
    return (
        <div className="row card-list row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
            {
                (listRobots.length === 0) ? <Loader /> :
                    listRobots.map(user => {
                        return <Robot user={user} key={user.id} id={user.id} />
                    })
            }
        </div>
    )
}
export default CardList;