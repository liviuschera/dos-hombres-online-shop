import React from "react";
import { useSelector } from "react-redux";
import { selectDirectory } from "../../redux/directory/directory.selector";
import MenuItem from "../../components/menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = props => {
  // const [menuItems, setMenuItems] = useState();
  const menuItems = useSelector(state => selectDirectory(state));
  return (
    <div className="directory-menu">
      {menuItems.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
