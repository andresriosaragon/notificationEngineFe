import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { SampleDataTable } from "./pages/SamplePage";
import { FormPage } from "./pages/FormPage";
import { useStyles } from "./Router.styles";

function Index() {
  return <h2>Home</h2>;
}

const AppRouter = () => {
  const classes = useStyles();
  return (
    <Router className={classes.root}>
      <div className={classes.root}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          className={classes.menu}
        >
          <ListItem button>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem button>
            <Link to="/table">Table</Link>
          </ListItem>
          <ListItem button>
            <Link to="/form">Form</Link>
          </ListItem>
        </List>
        <div id="content" className={classes.main}>
          <Route path="/" exact component={Index} />
          <Route path="/table" component={SampleDataTable} />
          <Route path="/form" component={FormPage} />
        </div>
      </div>
    </Router>
  );
};

export { AppRouter };
