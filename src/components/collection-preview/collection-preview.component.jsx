import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {console.log(items)}
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            // <div key={item.id}>{item.name}</div>
            <CollectionItem
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
