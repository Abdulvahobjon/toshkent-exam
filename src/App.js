import Parametrs from "./parametrs";
import data1 from "./data1";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Layout from "./layout/Layout";

export default function App() {
  let [info1, setInfo1] = useState(data1);
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Home info1={info1} setInfo1={setInfo1}/>} />
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
