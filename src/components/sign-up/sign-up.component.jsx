import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

export default function SignUp(params) {
  //   const [displayName, setDisplayName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  async function handleSubmit(event) {
    const { email, displayName, password, confirmPassword } = state;
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords dont't match");
      return;
    }
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      // Clear the form
      setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(`Failed to create a new account: ${error}`);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setState(prevState => {
      const newState = { prevState, ...{ [name]: value } };
      return newState;
    });
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form action="" className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email`"
          value={state.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}
