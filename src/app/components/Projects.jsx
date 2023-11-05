"use client";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";

import { MENULINKS, PROJECTS } from "../data.js";
import Card from "./Card.jsx";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const fade_left = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ",
  };
  return (
    <section
      className=" position-relative  user-select-none "
      id={MENULINKS[2].ref}
      ref={ref}
      style={fade_left}
    >
      <div className="container ">
        <p className=" text-uppercase  ">Projects</p>
        <h1 className="fs-1 mt-2  fw-medium fs-6">My Projects</h1>
        <div className="row gap-3 d-flex justify-content-center ">
          {PROJECTS.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
