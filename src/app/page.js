"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="p-5 position-relative ">
      <Cursor />
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <div
        className="  bgImg"
        style={{
          backgroundImage: "url(./bgg.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="  bg" />
    </main>
  );
}
