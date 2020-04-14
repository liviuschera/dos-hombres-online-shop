import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../../components/menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = props => {
  const menuItems = useSelector(state => selectDirectorySections(state));
  return (
    <div className="directory-menu">
      {menuItems.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
