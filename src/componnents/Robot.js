import Modal from "./Modal";

const Robot = ({ user }) => {
    const target = "#detailRobot" + user.id;
    return <>

        <div className="col mt-3" data-mdb-toggle="modal" data-mdb-target={target} >
            <div className="card bg-green">
                <img
                    src={user.image}
                    className="card-img-top"
                    alt={user.name}
                />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{user.name}</h5>
                    <p className="card-text">
                        {user.email}
                    </p>
                </div>
            </div>
        </div>
        <Modal user={user} />
    </>
}
export default Robot;