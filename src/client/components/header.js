import React from "react";
import { Link } from "react-router-dom";

/**
 * Header component
 */
const Header = () => {
  /**
   * Base CSS class
   * @returns {ReactElement}
   */
  const baseCls = "header";

  return (
    <div className={baseCls}>
      <Link className={`${baseCls}__title`} to="/">
        MyTodos
      </Link>
    </div>
  );
};

export default Header;
