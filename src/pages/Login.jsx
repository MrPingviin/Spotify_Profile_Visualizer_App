import Input from "./../components/inputs/Input";
import Button from "./../components/inputs/Button";
import AccountPanel from "./../components/panels/AccountPanel";
import ClickableText from "./../components/interactive/ClickableText";
import Spotilogo from "./../components/image/Spotilogo";
import TotalCenter from "./../components/align/TotalCenter";
import HorizontalCenter from "./../components/align/HorizontalCenter";

const LoginPage = ({ setActualPage }) => {
  return (
    <>
      <AccountPanel>
        <TotalCenter>
          <Spotilogo width="70%" />
        </TotalCenter>

        {/* //! ----- TEMPORARY TEXT, SUBJECT TO DELETE IN THE NEAR FUTURE PATCH */}
        <div>
          <center>
            <h2>🚧Attention! This function is still WIP!🚧</h2>
          </center>
          <h3>🚧Please use the login with Spotify option at the bottom!🚧</h3>
        </div>
        {/* //! ----- TEMPORARY TEXT, SUBJECT TO DELETE IN THE NEAR FUTURE PATCH */}

        <h1>Login</h1>
        <Input type="text" placeholder="Username" id="username" />
        <Input type="password" placeholder="Password" id="password" />
        <Button onClick={() => alert("WIP! Please use the login with Spotify option right below!")}>Login</Button>
        <HorizontalCenter>
          <span>
            If you don't have an account yet,{" "}
            <ClickableText onClick={() => setActualPage("Register")}>
              register here
            </ClickableText>
            .
          </span>
        </HorizontalCenter>
        <HorizontalCenter>
          <span>
            Or login by one click with{" "}
            <ClickableText
              onClick={() =>
                (window.location.href = "http://localhost:3500/login")
              }
            >
              Spotify
            </ClickableText>
          </span>
          .
        </HorizontalCenter>
      </AccountPanel>
    </>
  );
};

export default LoginPage;
