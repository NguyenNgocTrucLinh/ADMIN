import React, { useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import useForm from "react-hook-form";
const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/home" } };
  let data = sessionStorage.getItem('myData');
  data = JSON.parse(data);

  let usersData
  if (data)
    usersData = { email:data.email, password:data.password };
  else
    usersData = { email:'', password:'' };
  const [ users, setUsers ] = useState(usersData);
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUsers({...users, [name]: value});
  };

  const login = () => {
    sessionStorage.setItem('myData', JSON.stringify(users));
    let data = sessionStorage.getItem('myData');
    data = JSON.parse(data);
    if (data.email === 'ntrungtn@gmail.com'){
      history.replace(from);
      }else
        {console.log("Error Email")}
  };


  return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to="/home"><b>Admin</b>LTE</Link>
          </div>
          {/* /.login-logo */}
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form
                // onSubmit={handleSubmit(onSubmit)}
                method="post"
                noValidate
            >
              <div className="form-group has-feedback handle-input">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={`${errors.email && "inputError"}`}
                    placeholder="Email"
                    value={users.email}
                    onChange={handleInputChange}
                    // onBlur={e => validateUserName(e.target.value)}
                    // ref={register({ required: true, validate: validateUserName, pattern: /^\S+@\S+$/i })}
                />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback handle-input">
                <input
                    type="password"
                    name="password"
                    id="password"
                    className={`${errors.password && "inputError"}`}
                    value={users.password}
                    onChange={handleInputChange}
                    // ref={register({ required: true, minLength: 5 })}
                    placeholder="Password"
                />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              <div className="row">
                <div className="col-xs-8">
                </div>
                {/* /.col */}
                <div className="col-xs-4">
                  <button
                      onClick={login}
                      className="btn btn-primary btn-block btn-flat"
                  >
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
          </div>
          {/* /.login-box-body */}
        </div>
      </div>
  );
}

export default Login;
