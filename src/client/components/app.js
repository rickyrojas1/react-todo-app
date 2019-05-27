import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import TodosPage from "./todos-page";
import Header from "./header";

/**
 * Prop Types
 * @private
 */
const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

/**
 * App component
 * @returns {ReactElement}
 */
const App = ({ children }) => {
  /**
   * Base CSS class
   */
  const baseCls = "app";
  return (
    <BrowserRouter>
      <div className={baseCls}>
        <Header />

        <Route exact path="/" component={TodosPage} />
        <Route path="/:id" component={TodosPage} />
      </div>
    </BrowserRouter>
  );
};

App.propTypes = propTypes;

export default App;
