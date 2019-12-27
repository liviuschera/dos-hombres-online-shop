import React, { useState } from "react";

import "./sign-in.styles.scss";

function SignIn() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
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
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form action="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignIn;
