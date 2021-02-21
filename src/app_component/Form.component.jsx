import React from "react";
import "./Form.style.css";

const Form = (props) => {
  return (
    <div className="container ">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="city"
            />
          </div>
          <div className="col-md-3 mt-mt-0 text-md-left">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="country"
            />
          </div>
          <button className="btn btn-warning">Get Weather</button>
        </div>
      </form>
    </div>
  );
};
function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter city and country
    </div>
  );
}
export default Form;
