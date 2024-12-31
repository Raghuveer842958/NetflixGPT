import React, { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  // useEffect(
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const { uid, email, displayName } = user.uid;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //       // navigate("/browse");
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       // navigate("/");
  //     }
  //   }),
  //   []
  // );

  return (
    <div>
      {/* <Header /> */}
      <Login />
    </div>
  );
};

export default Body;
