import { useState, useRef } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { BG_URL, USER_AVATAR } from "../utils/constant";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // const handleButtonClick1 = () => {
  //   const message = checkValidData(email.current.value, password.current.value);
  //   setErrorMessage(message);
  //   if (message) return;

  //   if (!isSignInForm) {
  //     // Sign Up Logic
  //     createUserWithEmailAndPassword(
  //       auth,
  //       email.current.value,
  //       password.current.value
  //     )
  //       .then((userCredential) => {
  //         const user = userCredential.user;
  //         updateProfile(user, {
  //           displayName: name.current.value,
  //           photoURL: USER_AVATAR,
  //         })
  //           .then(() => {
  //             const { uid, email, displayName, photoURL } = auth.currentUser;
  //             dispatch(
  //               addUser({
  //                 uid: uid,
  //                 email: email,
  //                 displayName: displayName,
  //                 photoURL: photoURL,
  //               })
  //             );
  //           })
  //           .catch((error) => {
  //             setErrorMessage(error.message);
  //           });
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         setErrorMessage(errorCode + "-" + errorMessage);
  //       });
  //   } else {
  //     // Sign In Logic
  //     signInWithEmailAndPassword(
  //       auth,
  //       email.current.value,
  //       password.current.value
  //     )
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         setErrorMessage(errorCode + "-" + errorMessage);
  //       });
  //   }
  // };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    if (message) {
      console.log("Invalid Credential");
      setErrorMessage(message);
      return;
    }

    if (!isSignInForm) {
      // sign up
      console.log("Inside signUp handler");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // update user profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMT58bi8Lthkhqd0tlGuiSZSku1Faq2XQhwR3tW2NO8rzSP5nTMDdFoU&s",
          })
            .then(() => {
              // Profile updated!
              // console.log("sign up user is :", user);
              const { uid, email, displayName } = user;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User Successfully Logined :", user);
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
