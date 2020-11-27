import React from "react";

import auth from "../services/authService";

import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";

import Validation from "./validation";
import Joi from "joi-browser";

class Login extends Validation {
  state = {
    data: {
      userid: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    userid: Joi.string().required(),
    password: Joi.string().required().min(5),
  };

  doSubmit = async () => {
    console.log(this.state.data);
    const { data } = this.state;
    const success = await auth.login(data);
    console.log(success);
    if (success) {
      toast.success("Successfully login");
      window.location = "/home";
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div className="row m-5">
          <div className="col-md-8 "></div>
          <div
            className="   float-right "
            // style={{ width: "0%" }}
          >
            <form
              onSubmit={this.handleSubmit}
              className="m-1 p-1 col-11 col-12 col-md-9 mt-2 "
            >
              {/*m-2 col-md-4 col-12*/}
              <h1 className="text-center "> Login</h1>

              <TextField
                name="userid"
                label="User Id"
                color="secondary"
                size="small"
                className="m-3 col-xl-10 col-10"
                onChange={this.handleChange}
                helperText={errors.lastName}
                error={errors.lastName}
                required
              />

              <TextField
                name="password"
                label="Password"
                color="secondary"
                size="small"
                type="password"
                className="m-3 col-xl-10 col-10"
                onChange={this.handleChange}
                helperText={errors.password}
                error={errors.password}
                required
              />

              <center>
                <button
                  type="submit"
                  className=" btn btn-primary  btn-block mb-3 mt-2"
                >
                  Sign up
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
