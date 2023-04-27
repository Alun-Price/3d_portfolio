import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { eco, eco1, eco2, eco3, eco4 } from "../assets";

const Eco = () => {
  return (
    <>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        EcoOnline : Chemical Approval
      </h2>
      <div className="flex flex-wrap justify-center max-w-3xl ">
        <img
          src="https://www.ecoonline.com/hs-fs/hubfs/Chem_approval%20(1).png?width=3600&amp;name=Chem_approval%20(1).png 3600w"
          className="w-1000 rounded mt-4 mb-8"
          alt="..."
        />
      </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextWhite}>Introduction</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Chemical Approval was designed to streamline and automate the process of
        approving chemicals. The solution allows users to create chemical
        inventories, assess risks associated with chemicals, and generate safety
        data sheets (SDS) and labels. It also facilitates communication between
        employees and management and provides an audit trail for all
        chemical-related activities.
      </motion.p>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextWhite}>Tech Stack</p>
      </motion.div>
      <motion.ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <li>PHP(Laravel) Backend</li>
        <li>Vue2.js Frontend</li>
        <li>Vuetify UI Framework</li>
      </motion.ul>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextWhite}>My Role </p>
      </motion.div>
      <motion.ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <li>involved in design discussions</li>
        <li>produced various backend endpoints (Laravel)</li>
        <li>implemented internationalisation (Vue2)</li>
        <li>snag list and bug fixing</li>
      </motion.ul>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextWhite}>Screenshots</p>
      </motion.div>
      <div className="flex flex-wrap justify-left max-w-2xl ">
        <img
          src={eco2}
          alt="chemical approval screenshot1"
          className="w-200 mt-4 mb-8"
        />
        <img
          src={eco3}
          alt="chemical approval screenshot2"
          className="w-2000 mt-4 mb-8"
        />
        <img
          src={eco4}
          alt="chemical approval screenshot3"
          className="w-2000 mt-4 mb-8"
        />
      </div>
    </>
  );
};

export default SectionWrapper(Eco, "");
