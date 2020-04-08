import React from "react";

import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

export default function CollectionPage({ match }) {
  const collection = useSelector((state) =>
    selectCollection(match.params.collectionId)(state)
  );

  console.log(collection.items);

  // console.log(match.params.collectionId);

  return (
    <div className="collection-page">
      {collection.items.map((item) => item.name)}
    </div>
  );
}
