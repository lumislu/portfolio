"use client";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { MENULINKS, SKILLS } from "../data.js";
import { AiFillHtml5 } from "react-icons/ai";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const fade_left = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ",
  };

  return (
    <section
      className="  position-relative  user-select-none"
      id={MENULINKS[1].ref}
      ref={ref}
      style={fade_left}
    >
      <div className=" container  py-4 d-flex  flex-column justify-content-center ">
        <div className=" d-flex flex-column ">
          <div className="flex flex-col">
            <p className=" text-uppercase  ">SKILLS</p>
            <h1 className="fs-1 mt-2  fw-medium fs-6">My Skills</h1>
          </div>
          <div className="mt-4">
            <h3 className="text-uppercase  text-secondary   fw-medium fs-6 ">
              LANGUAGES AND TOOLS
            </h3>
            <div className="d-flex flex-wrap gap-4">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className=" text-uppercase text-secondary  fw-medium fs-6  ">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="d-flex flex-wrap  gap-4 ">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <h3 className=" text-uppercase text-secondary   fw-medium fs-6 ">
            DATABASES
          </h3>
          <div className="flex flex-wrap gap-6 ">
            {SKILLS.databases.map((skill) => (
              <Image
                key={skill}
                src={`/skills/${skill}.svg`}
                alt={skill}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
