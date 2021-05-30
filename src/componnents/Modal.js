import DetailRobot from "./DetailRobot"

const Modal = ({ user }) => {
    const target = "detailRobot" + user.id
    return (
      <div className="modal fade" id={target} tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content modal-bg-green">
            <div className="modal-body">
              <DetailRobot user={user} />
              <p>
                Adress :{"  " + user.address.street + "-" + user.address.suite}{" "}
              </p>
              <p>Website :{"  www." + user.website}</p>
              <p>Company :{"  "+user.company.name}</p>
              <button
                type="button"
                className="btn  btn-secondary"
                data-mdb-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );

}
export default Modal;