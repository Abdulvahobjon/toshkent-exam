import Parametrs from "./parametrs";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./Home";
import Layout from "./layout/Layout";

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Parametrs />} />
      </Route>
    )
  );
  return (
    <div className="">
    
        <RouterProvider router={routes}/>
    </div>
  );
}
