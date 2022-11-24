import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterBanner from "./FooterBanner";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <link rel="shortcut icon" href="../images/icons/favicon.ico" />
        <title>Gadgets Pro</title>
      </Head>
      <header style={{ position: "sticky", top: 0, zIndex: 9999 }}>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <FooterBanner />
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
