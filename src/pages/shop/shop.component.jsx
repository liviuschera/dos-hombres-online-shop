import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export default function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div>
      {/* <h1>SHOP PAGE</h1> */}
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}
