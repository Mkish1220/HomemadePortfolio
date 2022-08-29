import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
// import { Certificate } from 'crypto';
// install materialui
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a" />
        <VerticalTimelineElement
        className="vertical-timeleine-element--education"
        date="2022 - 2022"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<schoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          University of Central Florida, Orlando, Fl.
        </h3>

        <h4 className="Vertical-timeline-element-subtitle">
          Full Stack Web Development Bootcamp
        </h4>
        <p>Certificate for Full Stack Web Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        classname="vertical-timeline-element--education"
        date="2014 - 2012"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<schoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Concorde Career Institute, Orlando, Fl.
        </h3>

        <h4 className="Vertical-timeline-element-subtitle">
          Sciene of Nursing AS.
        </h4>
        <p>Associates in Science of Nursing</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        classname="vertical-timeline-element--education"
        date="2014 - 2012"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<schoolIcon />}
      >
       <h3 className="vertical-timeline-element-title">
          FLVS High School
        </h3>

        <h4 className="Vertical-timeline-element-subtitle">
          High School GED
        </h4>
        <p>GED</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        classname="vertical-timeline-element--education"
        date="2022-2021"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<workIcon />}
      >
       <h3 className="vertical-timeline-element-title">
          One Staff Medical Travel Nurses
        </h3>
        <h4 className="Vertical-timeline-element-subtitle">
          Registerd Nurse, Cape Canaveral, Fl
        </h4>
      <p>Multi State Licensed Nurse that assisted with daily acitivites for client care, along with running a department of 30 bed patient area with a high acuity rating. 
       Along with being charge nurse for 6 nurses and 3 CNAs, while continuing to educate staff on Quality assurance measusres and delivering outstanding, 
       client care.
     </p>
    </VerticalTimelineElement>
   </div>
  );
}
  

export default Experience;