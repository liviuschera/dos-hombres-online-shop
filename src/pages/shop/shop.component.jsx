import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

export default function ShopPage({ match }) {
  // we have access to match object because inside of App.js the shop page is being nested in the Route and route automatically passes the 3 objects into component as props: match, history, location
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    // whenever the collectionRef updates or whenever this code
    //  gets run for the first time collectionRef will send
    //  the snapshot representing the code of collections objects
    //  array at the time when this code renders.
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      WithSpinner(dispatch(updateCollections(collectionsMap)));
    });
  });

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}
