import React from "react";
import classes from "./Homepage.module.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/stocks.json";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Homapage = () => {
  return (
    <section className={classes.herosection}>
      <div className={classes.leftside}>
        <div className={classes.leftsidetext}>
          <h1>
            {""}
            <ReactTyped
              strings={["Calcuate and analyze your stock accurately"]}
              typeSpeed={100}
              loop
            />
          </h1>
          <p>
            We provide you with the best tools to analyze your stocks and make
            decisions based on them.
          </p>

          <Link to="/analyze">
            <motion.button
              whileHover={{ scale: 1.2, backgroundColor: "#f50057" }}
              transition={{
                ease: "linear",
                duration: 0,
                x: { duration: 0 },
              }}
            >
              Analyze
            </motion.button>
          </Link>
        </div>
      </div>
      <div className={classes.rightside}>
        <Lottie
          animationData={animationData}
          className={classes.lottieAnimation}
        />
      </div>
    </section>
  );
};

export default Homapage;
