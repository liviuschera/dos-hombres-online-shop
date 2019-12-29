import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

function SignIn() {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = event => {
    event.preventDefault();

    setState({ email: "", password: "" });
    console.log(state);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    console.log(`value: ${value} | name: ${name}`);

    setState(prevState => {
      const newState = { ...prevState, ...{ [name]: value } };
      console.log("onchange: ", newState);
      return newState;
    });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form action="post" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          id="email"
          label="Email"
          value={state.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          id="password"
          label="Password"
          value={state.password}
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
