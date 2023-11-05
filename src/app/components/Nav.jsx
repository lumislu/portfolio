import React, { useEffect, useState } from "react";
import { motion, useScroll, animate } from "framer-motion";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import Button from "./Button";
import { MENULINKS } from "../data.js";
import SoundBar from "./Sound";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const sidebarAnimate = {
    open: {
      clipPath: `circle(1200px at center)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(0px at center)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const menuToogleAnimate = {
    open: { opacity: 1, rotate: "360deg" },
    closed: { opacity: 1, y: "0" },
  };

  return (
    <div>
      <motion.div
        className="progress-bar "
        style={{ scaleX: scrollYProgress }}
      />
      <nav className=" navstyle   ">
        <span className=" fw-bold fs-2 ">logo</span>
        <div className="d-flex  justify-content-center align-items-center gap-4">
          <SoundBar />

          <motion.div
            className="fs-2 menubtn text-primary "
            animate={isOpen ? "open" : "closed"}
            variants={menuToogleAnimate}
          >
            {isOpen ? (
              <Button
                icon={<HiXMark />}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              />
            ) : (
              <Button
                icon={<HiBars3BottomRight />}
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              />
            )}
          </motion.div>
        </div>

        {isOpen && (
          <motion.div
            className="showmenu"
            animate={isOpen ? "open" : "closed"}
            variants={sidebarAnimate}
          >
            <div className="  d-flex flex-column align-items-center vh-100  justify-content-center  gap-3   ">
              {MENULINKS.map((el, index) => (
                <motion.a
                  key={index}
                  href={el.ref}
                  className="btn border-0 link fs-1 fill-text"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!open)}
                >
                  {el.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
