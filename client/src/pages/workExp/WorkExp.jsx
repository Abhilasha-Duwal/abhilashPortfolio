import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="2026 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Backend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                One Window Private Limited, Kathmandu
              </h4>
              <p>
                Develop and maintain backend services with Node.js, TypeScript,
                NestJS, and TypeORM for a OneDrive-like document management and
                collaboration platform. Design RESTful APIs for documents, files,
                folders, permissions, sharing, and user management. Implement
                live collaborative editing with Hocuspocus and rich-text editing
                with Tiptap, with real-time synchronization of document changes.
                Deliver real-time document and envelope updates using WebSockets,
                Socket.IO, and Pusher. Build access-control, roles, sharing, and
                access-request workflows, alongside digital-signature and
                envelope-management features. Implement database entities,
                relationships, queries, migrations, and optimizations in MySQL and
                MariaDB; work with Docker and multi-tenant architecture using
                tenant-specific database connections. Use Redis and BullMQ for
                background jobs and asynchronous processing.
              </p>
            </VerticalTimelineElement> */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="2024 - 2026"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                dgMarket Nepal Pvt. Ltd., Maitidevi, Kathmandu
              </h4>
              <p>
                Developed and maintained full-stack features using React.js,
                TypeScript, and Node.js. Integrated REST APIs and built reusable
                frontend components for the dgMarket Nepal website and related
                applications. Collaborated with developers and stakeholders to
                troubleshoot issues and improve functionality.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="2022 - 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Dzango Technology / Eight Bit Pvt. Ltd., Sanepa, Lalitpur
              </h4>
              <p>
                Built full-stack applications with React.js, TypeScript, Redux,
                Redux Toolkit, Node.js, Fastify, and PostgreSQL. Designed
                RESTful APIs and contributed shared packages and reusable
                components in a monorepo. Developed features for Learning
                Management Systems (LMS) and employee-management applications.
                Implemented internationalization with i18next and react-i18next;
                automated workflows with Make.com. Wrote unit and component tests
                with Jest and React Testing Library; used Docker in development
                and deployment.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Full-Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Dibtech Nepal Pvt. Ltd., Shantinagar, Kathmandu
              </h4>
              <p>
                Developed responsive frontend applications using React.js, Redux,
                TypeScript, and Tailwind CSS. Built backend API endpoints using
                Node.js, Express.js, and MongoDB, and integrated REST APIs and
                GraphQL. Led frontend development across multiple projects,
                building reusable UI components for e-commerce and cryptocurrency-related websites.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="2020 - 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Front-End Web Development Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Fnclick Pvt. Limited, Libali, Bhaktapur
              </h4>
              <p>
                Built responsive web interfaces using HTML5, CSS3, Bootstrap 4,
                JavaScript, and jQuery. Contributed to frontend development and
                UI improvements, including work on the Eco-panel Nepal website.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
