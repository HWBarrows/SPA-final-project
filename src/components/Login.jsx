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
  const [loginAttempt, setLoginAttempt] = useState(false);
  const [isLoginDetailNotValid, setIsLoginDetailNotValid] = useState(false);
  const [isPasswordThere, setIsPasswordThere] = useState(false)
  // console.log(JSON.stringify(users.slice(0,20)));

  // console.log(users);
  //setUsers(...users, {test:"user"})
  // console.log(users[0].login.password);
  // console.log(users[0].login.username);

  function checkUserName(e) {
    setData({ ...data, userName: e.target.value });
  }

  function checkPassword(e) {
    setData({ ...data, password: e.target.value });
    setIsPasswordThere(!isPasswordThere);
  }

  function submitLogin(e) {
    e.preventDefault();
    //Can use to confirm checkIfUserExist is truly empty
    //if (array[index] != null) {
    // The == and != operators consider null equal to only null or undefined
    //}

    const checkIfUserExist = users.filter(
      (user) =>
        user.login.username === data.userName &&
        user.login.password === data.password
    ); 

    if (checkIfUserExist.length == 0 ){
      setIsLoginDetailNotValid(true)
    }

    checkIfUserExist[0] != null && setProfile(...checkIfUserExist);
    checkIfUserExist[0] != null && setIsLoggedIn(true);
    checkIfUserExist[0] == null && setLoginAttempt(true);
    // console.log(checkIfUserExist);
  }

  console.log(users);

  return (
    // <div className="loginWrapper">
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
                  onChange={checkUserName}
                  type="text"
                  placeholder="Enter your username"
                ></input>


                <input
                  className="loginInput"
                  onChange={checkPassword}
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                ></input> 
                
                <span className="eyeForLogin">
                  {isPasswordThere && <FaEye onMouseDown={() => setShow(!show)} />}
                </span>
                <p style={{fontSize:"13.33px"}}>{isLoginDetailNotValid && "your username/password is not correct, try again!"}</p>

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
    // </div>
  );
}
