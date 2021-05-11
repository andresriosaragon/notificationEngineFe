import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { SampleDataTable } from "./pages/SamplePage";
import { FormPage } from "./pages/FormPage";

function Index() {
  return <h2>Home</h2>;
}

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products/1">Table</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/products/:id" component={SampleDataTable} />
        <Route path="/form" component={FormPage} />
      </div>
    </Router>
  );
};

export { AppRouter };
