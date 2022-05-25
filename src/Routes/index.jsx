import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export default function Routes() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub: user")) || {}
  );
  const [token, setToken] = useState(
    localStorage.getItem("@KenzieHub: token") || ""
  );
  // const [authenticated, setAuthentiated] = useState(false);

  // useEffect(() => {
  //   if (token) {
  //     setAuthentiated(true);
  //   }
  // }, [authenticated, token]);

  return (
    <Switch>
      <Route exact path="/">
        <Home user={user} token={token} setUser={setUser} setToken={setToken} />
      </Route>
      <Route path="/login">
        <Login
          user={user}
          token={token}
          setUser={setUser}
          setToken={setToken}
        />
      </Route>
      <Route path="/register">
        <Register token={token} setUser={setUser} />
      </Route>
    </Switch>
  );
}
