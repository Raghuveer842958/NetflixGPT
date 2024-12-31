import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Browse from "./components/Browse";
import appStore from "./utils/appStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import Pending from "./components/Pending";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <Body />,
    },
    {
      path: "/test",
      element: <Pending />,
    },
    {
      path: "/movie/:id",
      element: <Pending />,
    },
  ]);

  // useEffect(
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const { uid, email, displayName } = user.uid;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //       // navigate("/browse");
  //       // ...
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       // navigate("/");
  //     }
  //   }),
  //   []
  // );

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
