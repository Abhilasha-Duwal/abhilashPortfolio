import React from "react";
import Abhilasha from "../../assets/images/Abhilasha.jpg";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: [40, -10, 0],
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Abhilasha} alt="profile_pic" />
          </div>

          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Software Developer with 5+ years of experience in backend and
              full-stack development, specializing in Node.js, TypeScript,
              NestJS, React.js, REST APIs, and database-driven applications.
              Experienced in building scalable backend services, document
              management systems, rich-text editing, and digital-signature
              platforms. Hands-on with TypeORM, MySQL/MariaDB, PostgreSQL,
              MongoDB, Redis, BullMQ, Docker, Tiptap, Hocuspocus, WebSockets,
              Socket.IO, and Pusher. Uses AI-assisted tools (Claude, OpenCode,
              ChatGPT) to support coding, debugging, and problems-solving.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
