import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { FaEye } from "react-icons/fa";
import UserAccount from "./UserAccount";
import { ProfileContext } from "../contexts/ProfileContext";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import "../styles/Login.scss";

export default function Login() {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useContext(UserContext);
  const [data, setData] = useState({ userName: "", password: "" });
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [profile, setProfile] = useContext(ProfileContext);
  const [isUserNameNotValid, setIsUserNameNotValid] = useState(false);
  const [isPasswordNotValid, setIsPasswordNotValid] = useState(false);

  // console.log(JSON.stringify(users.slice(0,20)));

  function saveEnteredUserName(e) {
    setData({ ...data, userName: e.target.value });
  }

  function saveEnteredPassword(e) {
    setData({ ...data, password: e.target.value });
  }

  function submitLogin(e) {
    e.preventDefault();
    if (data.userName == "" && data.password == ""){
      return;
    }

    const user = users.find((user) => user.login.username === data.userName);

    if (!user) {
      setIsUserNameNotValid(true);
      setIsPasswordNotValid(true);
      return;
    }
    if (user.login.password != data.password) {
      setIsUserNameNotValid(false);
      setIsPasswordNotValid(true);
      return;
    }

    setProfile(user);
    setIsLoggedIn(true);
  }

  return (
    <>
      {(() => {
        if (isLoggedIn) {
          return <UserAccount />;
        }

        return (
          <div className="loginWrapper">
            <div className="imgWrapper"></div>
            {showSignUpForm && (
              <SignUp
                showSignUpForm={showSignUpForm}
                setShowSignUpForm={setShowSignUpForm}
              />
            )}

            {!showSignUpForm && (
              <div className="loginForm">
                <h3>Log In</h3>

                <input
                  className="loginInput"
                  onChange={saveEnteredUserName}
                  type="text"
                  placeholder="Enter your username"
                ></input>

                <input
                  className="loginInput"
                  onChange={saveEnteredPassword}
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                ></input>

                <span className="eyeForLogin">
                  {data.password && (
                    <FaEye onMouseDown={() => setShow(!show)} />
                  )}
                </span>

                {isUserNameNotValid && <p>username not valid</p>}
                {isPasswordNotValid && <p>password not valid</p>}

                {/* <button type='submit' onClick={submitLogin}>{ !isLoggedIn && !loginAttempt ? "login" : "Sign Up"}</button>     */}

                <button type="submit" onClick={submitLogin}>
                  Log In
                </button>

                <a onClick={() => setShowSignUpForm(true)}>
                  New User? Sign up here{" "}
                </a>
              </div>
            )}
          </div>
        );
      })()}
    </>
  );
}
