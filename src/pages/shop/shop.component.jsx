import React, { useEffect, useState } from "react";
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

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export default function ShopPage({ match }) {
  const [loading, setLoading] = useState(true);
  // we have access to match object because inside of App.js the shop page is being nested in the Route and route automatically passes the 3 objects into component as props: match, history, location
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    // whenever the collectionRef updates or whenever this code
    //  gets run for the first time collectionRef will send
    //  the snapshot representing the code of collections objects
    //  array at the time when this code renders.
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
  });

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}
