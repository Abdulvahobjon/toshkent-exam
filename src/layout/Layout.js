import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}
