import { useState } from "react";

import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TotalCenter from "./components/align/TotalCenter";
import Button from "./components/inputs/Button";
import UserMainPage from "./pages/UserMainPage";

const Router = () => {
  const [actualPage, setActualPage] = useState("LoggedIn");

  if (actualPage == "Login") {
    return (
      <main className="loginPage">
        <TotalCenter>
          <LoginPage setActualPage={setActualPage} />
        </TotalCenter>
      </main>
    );
  }

  if (actualPage == "Register") {
    return (
      <main className="registerPage">
        <TotalCenter>
          <RegisterPage setActualPage={setActualPage} />
        </TotalCenter>
      </main>
    );
  }

  if (actualPage == "LoggedIn") {
    return (
      <main className="userMainPage">
        <>
          <UserMainPage setActualPage={setActualPage} />
        </>
      </main>
    );
  }

  if (actualPage == "LoginWithSpotify") {
    return (
      <main className="spotiLoginPage">
        <TotalCenter>
          <Button className="Button" onClick={() => window.location.href = "http://localhost:3500/login"}>Login with Spotify</Button>
        </TotalCenter>
      </main>
    );
  }
};

export default Router;
