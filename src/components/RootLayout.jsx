import { Outlet, useSearchParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

export default function RootLayout() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}