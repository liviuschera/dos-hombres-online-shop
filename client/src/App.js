import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
// import { selectShopCollections } from "./redux/shop/shop.selectors";

import "./App.scss";

function App() {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const dispatch = useDispatch();

  // const collectionsObject = useSelector((state) =>
  //   selectShopCollections(state)
  // );
  // useEffect(() => {
  //   addCollectionAndDocuments("collections", collectionsObject);
  // }, [collectionsObject]);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) =>
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }))
        );
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });
    return () => unsubscribeFromAuth();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
