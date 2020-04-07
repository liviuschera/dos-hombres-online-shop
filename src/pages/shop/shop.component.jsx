import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

export default function ShopPage({ match }) {
  // we have access to match object because inside of App.js the shop page is being nested in the Route and route automatically passes the 3 objects into component as props: match, history, location
  console.log(match);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}
