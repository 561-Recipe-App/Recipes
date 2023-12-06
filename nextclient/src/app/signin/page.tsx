import * as React from "react";
import MainLayout from "../../components/MainLayout";
// import CardContainer from '../../components/CardContainer';


// https://getbootstrap.com/docs/4.0/components/forms/
function SignIn() {
  return (
    <MainLayout>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </MainLayout>
  );
}

export default SignIn;