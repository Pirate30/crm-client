import React from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

export default function DefaultLayout({ children }) {
  return (
    <div className="defaultlayout">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
