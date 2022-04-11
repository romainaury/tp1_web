import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignIn from "./components/signin/SignInComponent";
import LogIn from "./components/login/LogInComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const HomeComponent = ({ user }) => {
  return !user?.id ? (
    <div>Euh faudrait se connecter là</div>
  ) : (
    <div>
      <ul>
        <li>userId: {user.id}</li>
        <li>username: {user.name}</li>
        <li>userEmail: {user.email}</li>
      </ul>
    </div>
  );
};

const NavbarComponent = ({ user }) => (
  <div className="container-fluid d-flex bg-dark justify-content-start py-2">
    <Link className="mx-2 text-white text-decoration-none btn" to={"/"}>
      League of Stones
    </Link>
    {!user?.id ? (
      <>
        <Link
          className="mx-2 text-white text-decoration-none btn btn-secondary"
          to={"/login"}
        >
          Log in
        </Link>
        <Link
          className="mx-2 text-white text-decoration-none btn btn-secondary"
          to={"/signin"}
        >
          Sign in
        </Link>
      </>
    ) : (
      <Link
        className="mx-2 text-white text-decoration-none btn btn-secondary"
        to={"/logout"}
      >
        Log out
      </Link>
    )}
  </div>
);

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setUser({});
    navigate("/");
  }, [setUser]);

  return <></>;
};

const App = () => {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Router>
        <NavbarComponent user={user} />
        <Routes>
          <Route path="/" exact element={<HomeComponent user={user} />} />
          <Route
            path="/login"
            element={<LogIn user={user} setUser={setUser} />}
          />
          <Route
            path="/signin"
            element={<SignIn user={user} setUser={setUser} />}
          />
          <Route path="/logout" exact element={<Logout setUser={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
