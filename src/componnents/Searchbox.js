const Searchbox = (props) => {

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <input
          id="search-input"
          type="search"
          className="form-control col-6 search"
          name="search-input"
          placeholder="Rechercher par nom"
          onChange={props.onChange}
          onKeyUp={props.onChange}
        />
      </div>
    </div>
  )
}
export default Searchbox;