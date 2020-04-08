import React from "react";
import { useSelector } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

export default function CollectionsOverview() {
  const collections = useSelector((state) => selectShopCollections(state));
  // console.log(Object.values(collections));

  return (
    <div className="collections-overview">
      {Object.values(collections).map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
}
