const DetailRobot = ({ user }) => (
    <div className="col-6 w-100 modal-bg-green">
       
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
)
export default DetailRobot;