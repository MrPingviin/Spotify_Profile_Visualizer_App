import Input from "../components/inputs/Input";
import Button from "../components/inputs/Button";
import AccountPanel from "../components/panels/AccountPanel";
import ClickableText from "../components/interactive/ClickableText";
import Spotilogo from "../components/image/Spotilogo";
import TotalCenter from "../components/align/TotalCenter";
import HorizontalCenter from "../components/align/HorizontalCenter";

const RegisterPage = ({ setActualPage }) => {
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
        <h1>Create an Account</h1>
        <Input type="text" placeholder="Username" id="username" />
        <Input type="email" placeholder="E-mail" id="email" />
        <Input type="password" placeholder="Password" id="password" />
        <Input
          type="password"
          placeholder="Password again"
          id="password_again"
        />
        <Button onClick={() => alert("WIP! Please use the login with Spotify option right below!")}>Create Account</Button>
        <HorizontalCenter>
          <p>
            If you have an account,{" "}
            <ClickableText onClick={() => setActualPage("Login")}>
              login here
            </ClickableText>
            .
          </p>
        </HorizontalCenter>
        <HorizontalCenter>
          <span>
            Or login by one click with{" "}
            <ClickableText
              onClick={() =>
                (window.location.href = "http://accounts.spotify.com/authorize?client_id=41d86423893746dcaf5c73b7085a6eb8&response_type=code&redirect_uri=https://penguinweb.eu/Spotify_Visualizer_App/&show_dialog=true&scope=user-read-private%20user-library-read%20user-read-email%20playlist-read-private%20user-read-recently-played%20user-follow-read%20user-read-playback-state%20user-top-read")
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

export default RegisterPage;
