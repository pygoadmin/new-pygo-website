import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/main.scss";
import { Helmet } from "react-helmet";
import icon from "../../static/favicon.ico";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <title>PYGO Inc.</title>
        <link rel='icon' href={icon} />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
