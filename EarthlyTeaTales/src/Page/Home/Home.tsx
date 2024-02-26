import React from "react";
import { useNavigate } from "react-router-dom";

export interface HomeLoginProps {
  isLoggedIn: Boolean;
  email: string;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HomeLoginProps> = ({ isLoggedIn, email, setLoggedIn }) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    // You'll update this function later
  };

  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={isLoggedIn ? "Log out" : "Log in"}
        />
        {isLoggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  );
};

export default Home;
