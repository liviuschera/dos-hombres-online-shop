import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

export default function CollectionPage({ match }) {
  console.log(match.params.collectionId);

  return <div className="collection-page">CollectionPage</div>;
}
