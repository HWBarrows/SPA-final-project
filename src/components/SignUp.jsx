import React, { useState, useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";
import { UserContext } from "../contexts/UserContext";
import { FaEye } from "react-icons/fa";
import "../styles/Login.scss";
import "../styles/SignUp.scss";
import astro from "../styles/astro.jpeg"

const SignUp = ({ showSignUpForm, setShowSignUpForm }) => {
  const [users, setUsers] = useContext(UserContext);
  const [show, setShow] = useState(false)
  const [profile, setProfile] = useContext(ProfileContext);
  const [data, setData] = useState({});

  const [isUserRegistered, setIsUserRegistered] = useState(false);

  function signUp(e) {
    // take in the new username and password in a new-user object, and create a new user profile.
    // console.log(users);
    e.preventDefault();

    const userObj = {
      login: {
        username: data.username,

        password: data.password,
      },
      name: {
        first: data.firstName,
        last: data.lastName,
      },
      email: data.email,

      picture: {
        // medium: "http://www.formasdigitales.mx/images/client.png",
        // large: "http://www.formasdigitales.mx/images/client.png",
        // thumbnail: "http://www.formasdigitales.mx/images/client.png"
        medium: astro,
        large: astro,
        thumbnail: astro
     
      },
    };
    setUsers([...users, userObj]);

    if (Object.keys(data).length > 0) {
      setIsUserRegistered(true);
      setProfile(userObj);
      // setShowSignUpForm(false)
    }
  }



  return (
    <>
      <div className="loginForm">
        <h3>Sign Up</h3>
        <div className="nameInputs">
          <input className="loginNameInput"
            onChange={(e) => {
              setData({ ...data, firstName: e.target.value });
            }}
            type="text"
            placeholder="first name"
          />
          <input className="loginNameInput"
            onChange={(e) => {
              setData({ ...data, lastName: e.target.value });
            }}
            type="text"
            placeholder="last name"
          />
        </div>
        <input className="loginInput"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          type="email"
          placeholder="email"
        />

        <input className="loginInput"
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
          type="text"
          placeholder="username"
        />
       
        <input className="loginInput"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          type={show ? "text" : "password"}
          placeholder="password"
        />
        <span className="eyeForSignUp">
        <FaEye onClick={() => setShow(!show)} />
        </span>

        <button className="signUpBtn" type="submit" onClick={signUp}>
          Sign up
        </button>
        <a onClick={() => setShowSignUpForm(false)}>Go back to Login </a>
      </div>
    </>
  );
};

export default SignUp;
