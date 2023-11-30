import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Left from "/desktop_pc/left.svg";
import Right from "/desktop_pc/right.svg";
import { rebrandSlider1, rebrandSlider2 } from "../constants";
import {
  affinity1,
  affinity2,
  boohoo1,
  boohoo2,
  bsc1,
  bsc2,
  christmasmp4,
  coillte1,
  coillte2,
  darwin1,
  darwin2,
  engage_base1,
  engage_base2,
  epa1,
  epa2,
  pepsico1,
  pepsico2,
  rfu1,
  rfu2,
  sfpa1,
  sfpa2,
  virgin1,
  virgin2,
  vsummit1,
} from "../assets";

const Rebrands = () => {
  const carouselImages = [
    engage_base1,
    vsummit1,
    affinity1,
    boohoo1,
    bsc1,
    coillte1,
    darwin1,
    rfu1,
    epa1,
    pepsico1,
    sfpa1,
    virgin1,
  ];
  const carousel2Images = [
    engage_base2,
    christmasmp4,
    affinity2,
    boohoo2,
    bsc2,
    coillte2,
    darwin2,
    rfu2,
    epa2,
    pepsico2,
    sfpa2,
    virgin2,
  ];
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < carouselImages.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <>
      <h2 className="text-white font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]">
        Rebrands and Single Sign On
      </h2>
      <div className="flex flex-wrap justify-center max-w-3xl ">
        <img
          src={affinity1}
          className="w-1000 rounded mt-4 mb-8"
          alt="affinity login page"
          onClick={() => window.open(affinity1, "_blank")}
        />
      </div>

      <p className={styles.sectionSubTextWhiteLower}>Introduction</p>

      <p className="mt-2 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        The majority of Engage-EHS customers log in through the Engage portal
        and will use the base software, branded with the Engage logo and colour
        scheme. For clients on certain pricing tiers, there is an opportunity to
        obtain a rebrand. This allows them to customize the base software with
        their own login page background image, logos and colour schemes to try
        and match their own digital environment.{" "}
      </p>

      <p className={styles.sectionSubTextWhiteLower}>Tech Stack</p>

      <ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <li>PHP</li>
        <li>Go</li>
        <li>SASS</li>
      </ul>

      <p className={styles.sectionSubTextWhiteLower}>My Role</p>

      <ul className="mt-2 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px] list-disc list-outside">
        <li>I simplified what could be customized in a rebrand</li>
        <li>I wrote a guide, clarifying the rebranding procedure</li>
        <li>I updated all the front ends with a more modern design</li>
        <li>
          I worked with devops to automate/speed up the process for building,
          amending and releasing a rebrand (Jenkins, Terraform, AWS)
        </li>
        <li>I was responsible for all customer rebrands</li>
        <li>
          I spun up demo sites for Sales, so prospective clients could see what
          their rebranded site might look like in advance. This worked
          particularly well in the final stages of a tender.
        </li>
        <li>
          I worked with customer IT departments to configure and implement their
          SSO
        </li>
      </ul>

      <p className={styles.sectionSubTextWhiteLower}>Screenshots</p>

      <p className="mt-6 mb-5 text-secondary text-[15px] max-w-3xl leading-[30px]">
        <button className={styles.buttonHead1}>
          <span className={styles.sectionSubTextLower}>
            {rebrandSlider1[current]}
          </span>
        </button>{" "}
      </p>

      <div className="flex flex-wrap justify-center max-w-3xl ">
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
          <div className="relative w-full max-w-[1500px] flex items-center">
            {/* Left/right controls */}
            <AnimatePresence>
              {isFocus && (
                <motion.div
                  className="absolute left-2 right-2 flex justify-between z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onHoverStart={() => setIsFocus(true)}
                  onHoverEnd={() => setIsFocus(false)}
                >
                  <button onClick={onPrevClick}>
                    <img src={Left} className="h-8 w-8" />
                  </button>
                  <button onClick={onNextClick}>
                    <img src={Right} className="h-8 w-8" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            {/* List of Images */}
            <motion.div
              className="flex gap-4 flex-nowrap"
              animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
              onHoverStart={() => setIsFocus(true)}
              onHoverEnd={() => setIsFocus(false)}
            >
              {[...carouselImages].map((image, idx) => (
                <motion.img
                  key={idx}
                  src={image}
                  alt={image}
                  animate={{ opacity: idx === current ? 1 : 0 }}
                  className="object-fill"
                  // onClick={() => window.open(image, "_blank")}
                />
              ))}
            </motion.div>
          </div>
        </MotionConfig>
      </div>

      <p className="relative mt-3 mb-5 text-secondary text-[15px] max-w-3xl leading-[30px]">
        <button className={styles.buttonHead1mt}>
          <span className={styles.sectionSubTextLower}>
            {rebrandSlider2[current]}
          </span>
        </button>{" "}
        {/* Control pill */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex gap-2 px-2 py-1 bg-gray-400 rounded-full opacity-80">
            {[...carouselImages].map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)}>
                <div
                  className={`w-2 h-2 rounded-full ${
                    idx === current ? "bg-white" : "bg-zinc-600"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </p>

      {/* second carousel */}
      <div className="flex flex-wrap justify-center max-w-3xl ">
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
          <div className="relative w-full max-w-[1500px] flex items-center">
            {/* Left/right controls */}
            <AnimatePresence>
              {isFocus && (
                <motion.div
                  className="absolute left-2 right-2 flex justify-between z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onHoverStart={() => setIsFocus(true)}
                  onHoverEnd={() => setIsFocus(false)}
                >
                  <button onClick={onPrevClick}>
                    <img src={Left} className="h-8 w-8" />
                  </button>
                  <button onClick={onNextClick}>
                    <img src={Right} className="h-8 w-8" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            {/* List of Images */}
            <motion.div
              className="flex gap-4 flex-nowrap"
              animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
              onHoverStart={() => setIsFocus(true)}
              onHoverEnd={() => setIsFocus(false)}
            >
              {[...carousel2Images].map((image, idx) =>
                idx === 1 ? (
                  <motion.video
                    key={idx}
                    height="auto"
                    width="auto"
                    muted
                    loop
                    autoPlay
                    alt="project_video"
                    animate={{ opacity: idx === current ? 1 : 0 }}
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src={image} type="video/mp4"></source>
                  </motion.video>
                ) : (
                  <motion.img
                    key={idx}
                    src={image}
                    alt={image}
                    animate={{ opacity: idx === current ? 1 : 0 }}
                    className="object-fill"
                    // onClick={() => window.open(image, "_blank")}
                  />
                )
              )}
            </motion.div>
          </div>
        </MotionConfig>
      </div>
    </>
  );
};

export default SectionWrapper(Rebrands, "");
