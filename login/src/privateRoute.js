import React from "react";
import { Route, Redirect} from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    let session = localStorage.getItem('loggedIn') || sessionStorage.getItem('loggedIn');
    return (
      <Route
        {...rest}
        render={props =>
          session ? (
            <Component {...props} />
          ) : (
            <Redirect
            to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;