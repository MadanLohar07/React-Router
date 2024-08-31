import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";
import ErrorComp from "./Components/ErrorComp";
import Profiles from "./Components/Profiles";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorComp />,
    },
    {
      path: "/profiles",
      element: <Profiles />,
      children: [
        {
          path: "/profiles/:profileId",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <>
      <h2>React Router</h2>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
