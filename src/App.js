import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./component/Signup";
import Edit from "./component/Edit";
import Dash from "./component/Dash";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
  {
    path: "/dash",
    element: <Dash />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
