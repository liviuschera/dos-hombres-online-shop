import React from "react";

import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

export default function CollectionPage({ match }) {
  // passing ownProps (similar to connectToProps) through closure

  const { items, title } = useSelector((state) =>
    selectCollection(match.params.collectionId)(state)
  );

  return (
    <div className="collection-page">
      <h2 className="title">
        {title}
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </h2>
    </div>
  );
}
