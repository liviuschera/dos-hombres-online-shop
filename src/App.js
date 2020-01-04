import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.scss";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // setCurrentUser(user);
      console.log(user.uid);

      const createUser = await createUserProfileDocument(user);
      setCurrentUser(createUser.id);
      // console.log(currentUser);
    });
    return () => unsubscribeFromAuth();
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
