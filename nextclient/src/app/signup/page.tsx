import * as React from "react";
<<<<<<< HEAD
import MainLayout from "../../components/MainLayout";
=======
import MainLayout from "../../../../client/src/components/MainLayout";
>>>>>>> b689c78 (m)
// import CardContainer from '../../components/CardContainer';


// https://getbootstrap.com/docs/4.0/components/forms/
function SignUpPage() {
  return (
    <MainLayout>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"
                 placeholder="Enter name"></input>
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter email"></input>
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" htmlFor="exampleCheck1">I agree to the terms and services</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </MainLayout>
  );
}

export default SignUpPage;