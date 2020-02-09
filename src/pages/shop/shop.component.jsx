import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export default function ShopPage() {
  // const [collections, setCollections] = useState(SHOP_DATA);
  // // setCollections(SHOP_DATA);
  // console.log(collections);
  // const col = await collections;

  return (
    <div>
      {/* <h1>SHOP PAGE</h1> */}
      {SHOP_DATA.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}
