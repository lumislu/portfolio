"use client";
import Typewriter from "typewriter-effect";
import { MENULINKS } from "../data.js";
import styles from "./Hero.module.scss";
import Button from "./Button.jsx";
import { TYPED_STRINGS, SOCIAL_LINKS } from "../data.js";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      className="vh-100 d-flex  align-items-center  justify-content-around  "
      id={MENULINKS[0].ref}
    >
      <div className="d-flex flex-column  align-items-start justify-content-center p-5 user-select-none gap-4 ">
        <h5 className={`${styles.intro} text-primary `}>Hi, my name is</h5>
        <h1 className={`${styles.heroName} position-relative `}>
          YingHong
          <span className={`${styles.emphasize}`}></span>
          <span className=""> Lu</span>
        </h1>

        <div className="fs-2 opacity-50 ">
          <Typewriter
            options={{
              strings: TYPED_STRINGS,
              autoStart: true,
              loop: true,
              deleteSpeed: 3,
            }}
          />
        </div>
        <div aria-label="social" className="d-flex gap-4 fs-3">
          <Button icon={<HiOutlineMail />} href={SOCIAL_LINKS[0].url} />
          <Button icon={<AiFillGithub />} href={SOCIAL_LINKS[1].url} />
        </div>

        <Button type={"button"} href={`https://lumis-portfolio.webflow.io}`}>
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
};

export default Hero;
