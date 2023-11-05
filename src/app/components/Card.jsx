"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineRightCircle } from "react-icons/ai";
import Button from "./Button";
const Card = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      className="col-lg-5 link text-white  d-flex  flex-column flex-md-row  justify-content-center  align-items-center  position-relative rounded-4 p-0   overflow-hidden   "
      whileHover={{ scale: 0.98 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <figure className="col-12 m-0 ">
        <img
          src={item.image}
          alt={item.name}
          className="w-100 h-100  object-fit-cover  "
        />
      </figure>
      <h5 className=" card-text  ">{item.name}</h5>
      <span className="text-white card-func">{item.func}</span>

      {isHover && (
        <div className="position-absolute bg-black row h-100 w-100 ">
          <div className="col-4 d-flex flex-column justify-content-center align-items-center gap-2 fs-2 text-center ">
            <h5 className="fs-6">{item.name}</h5>
            <div className="d-flex gap-3  ">
              <Button
                icon={<AiOutlineRightCircle />}
                href={item.url}
                title="前往網站"
              />
              <Button
                icon={<AiFillGithub />}
                href={item.github}
                title="前往github"
              />
            </div>
          </div>
          <video className="col-8 " autoPlay controls>
            <source src={item.vedio} type="video/mp4" />
          </video>
        </div>
      )}
    </motion.div>
  );
};

export default Card;
