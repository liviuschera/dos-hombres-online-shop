import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

function SignIn() {
  const [state, setState] = useState({ email: "", password: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(state.email, state.password);
      setState({ email: "", password: "" });
    } catch (error) {
      console.error(`Couldn't sign in with email and password: ${error}`);
    }
  }

  const handleChange = event => {
    const { value, name } = event.target;
    // console.log(`value: ${value} | name: ${name}`);

    setState(prevState => {
      const newState = { ...prevState, ...{ [name]: value } };
      // console.log("onchange: ", newState);
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
          label="Email"
          value={state.email}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          value={state.password}
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          Sign In with Google
        </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
