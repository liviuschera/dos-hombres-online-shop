import React, { useState } from "react";

import "./sign-in.styles.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form action="post" onSubmit={handleSubmit}>
        <input type="text" name="email" id="email" value={email} />
        <input type="password" name="password" id="password" value={password} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignIn;
