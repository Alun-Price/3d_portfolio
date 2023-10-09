import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { obsMain, obs3, obs4, obs5, obs6, obs7 } from "../assets";

const Observation = () => {
  return (
    <>
      <h2 className="text-white font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]">
        The Observations Module
      </h2>
      <div className="flex flex-wrap justify-center max-w-3xl ">
        <img
          src={obsMain}
          className="w-1000 rounded mt-4 mb-8"
          alt="chemical approval main image"
          onClick={() => window.open(obsMain, "_blank")}
        />
      </div>

      <p className={styles.sectionSubTextWhiteLower}>Introduction</p>

      <p className="mt-2 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        The Observations module in the Engage-EHS SaaS platform was designed to
        help companies prevent accidents and incidents by the early
        identification and reporting of potential health and safety issues in
        the workplace. The module allowed users to report unsafe conditions or
        behavior, track corrective actions, and generate reports on trends and
        areas for improvement. Typical examples of observations include a worker
        not wearing personal protective equipment (PPE), a damaged safety guard
        on a machine, or a spill that has not yet caused harm.
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

      <ul className="mt-2 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px] list-disc list-inside">
        <li>Removed existing hazard data from the Incidents module</li>
        <li>Updated the Incidents module's front end to reflect this</li>
        <li>Built the Observations module front end pages</li>
        <li>Wired up the Observations module's backend</li>
        <li>
          Linked the module to other modules (e.g. My Dashboard, KPI & Reports)
        </li>
        <li>Decided on the module icon (there was controversy here!)</li>
        <li>Amended terminology translations</li>
        <li>Tested and released the module</li>
      </ul>

      <p className={styles.sectionSubTextWhiteLower}>Screenshots</p>

      <div className="flex flex-wrap justify-left max-w-2xl ">
        <img
          src={obs3}
          alt="observations module screenshot 1"
          className="w-200 mt-4 mb-4"
          onClick={() => window.open(obs3, "_blank")}
        />
        <p className="mb-10 text-secondary text-[15px] max-w-3xl leading-[30px]">
          <button className={styles.buttonHead1}>
            <span className={styles.sectionSubTextLower}>Screenshot 1</span>
          </button>{" "}
          The opening page of the module has some tabs that allow you to choose
          between your chosen business location's open and closed observations,
          the observations that you personally are involved in and a button to
          report a new observation.
        </p>

        <img
          src={obs4}
          alt="observations module report form screenshot 2"
          className="w-2000 mt-4 mb-4"
          onClick={() => window.open(obs4, "_blank")}
        />
        <p className="mb-10 text-secondary text-[15px] max-w-3xl leading-[30px]">
          <button className={styles.buttonHead1}>
            <span className={styles.sectionSubTextLower}>Screenshot 2</span>
          </button>{" "}
          Clicking the "Report an Observation" button brings you to this form,
          which should make reporting an observation easy! Note that you can add
          custom classification and category labels (see next screenshot).
        </p>

        <img
          src={obs6}
          alt="classification options in the observations modulescreenshot 3"
          className="w-2000 mt-4 mb-4"
          onClick={() => window.open(obs6, "_blank")}
        />
        <p className="mb-10 text-secondary text-[15px] max-w-3xl leading-[30px]">
          <button className={styles.buttonHead1}>
            <span className={styles.sectionSubTextLower}>Screenshot 3</span>
          </button>{" "}
          This page allows you to define custom classifications and categories -
          a very useful way to group issues, to see what areas you need to focus
          on going forward!
        </p>

        <img
          src={obs5}
          alt="actions in the observations module  screenshot 4"
          className="w-2000 mt-4 mb-4"
          onClick={() => window.open(obs5, "_blank")}
        />
        <p className="mb-10 text-secondary text-[15px] max-w-3xl leading-[30px]">
          <button className={styles.buttonHead1}>
            <span className={styles.sectionSubTextLower}>Screenshot 4</span>
          </button>{" "}
          If we want to stop an observation becoming an incident, we need to
          take timely action! Clicking on the Actions tab, allows us to sift
          through the actions in their various states - open, for approval,
          extension requested, completed. We even have a button to add an
          action!
        </p>

        <img
          src={obs7}
          alt="adding actions in the observations module screenshot 5"
          className="w-2000 mt-4 mb-8"
          onClick={() => window.open(obs7, "_blank")}
        />
        <p className="mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]">
          <button className={styles.buttonHead1}>
            <span className={styles.sectionSubTextLower}>Screenshot 5</span>
          </button>{" "}
          Clicking the "Add Action" button brings you to this form, which should
          make adding an action to your observation very easy!
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(Observation, "");
