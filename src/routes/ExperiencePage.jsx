import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { Timeline, Event } from "react-timeline-scribble";

import ContentPage from './ContentPage';
// import {} from './spring/ExperiencePageSpring';
import ContentPageHeader from '../components/Headers/ContentPageHeader';
import { TimelineContainer } from '../components';

const ExperiencePage = (props) => {

  return (
    <ContentPage theme={props.theme} feature="experience">
      <CustomContainer theme={props.theme}>
        <CustomPageHeader theme={props.theme}>
          <h2>Work Experience</h2>
          <h3>Louel Lagasca</h3>
        </CustomPageHeader>
        <TimelineContainer theme={props.theme}>
          <Timeline>
            <Event
              interval={"March 2022 – Present"}
              title={"UI/UX Developer"}
              subtitle={"Codev by Zylun Philippines Inc. – Makati City, Philippines"}
            >
              <ul className="details">
                <li>Handles a client’s enterprise network system for supply chain management.</li>
                <li>Develops and maintains web apps built with React, Mobx, and ExtJS.</li>
                <li>Develops and troubleshoots pages, reports, forms, widgets, and dashboards.</li>
                <li>Creates test coverage and documentation for project components.</li>
              </ul>
            </Event>
            <Event
              interval={"June 2021 – March 2022"}
              title={"Front-End Developer"}
              subtitle={"Whitecloak Technologies, Inc. – Pasig City, Philippines"}
            >
              <ul className="details">
                <li>Handled a client’s corporate banking and system management web applications.</li>
                <li>Developed and maintained web apps built with React, Redux, and Redux-Saga.</li>
                <li>Developed features for rendering and managing bank documents.</li>
                <li>Coordinated with multiple teams for testing, QA, and troubleshooting of APIs.</li>
              </ul>
            </Event>
            <Event
              interval={"February 2020 – June 2021"}
              title={"Web Developer"}
              subtitle={"Dottystyle Creative Co. – Makati City, Philippines"}
            >
              <ul className="details">
                <li>Handled a client’s engagement administration and analytics web application.</li>
                <li>Developed and maintained React, Redux, and jQuery-based web apps.</li>
                <li>Interpreted client needs and designed mockups for new pages and features.</li>
                <li>Implemented WordPress, React web sites from concept to deployment.</li>
                <li>Implemented charting libraries for data analytics and visualization features.</li>
              </ul>
            </Event>
            <Event
              interval={"June 2019 – August 2019"}
              title={"Technical Content Creator (Internship)"}
              subtitle={"Nokia Manila Technology Center – Quezon City, Philippines"}
            >
              <ul className="details">
                <li>Created and migrated technical manuals to XML using DITA guidelines.</li>
                <li>Led a small internship team to develop an automated peer evaluation web app.</li>
              </ul>
            </Event>
          </Timeline>
        </TimelineContainer>
      </CustomContainer>
    </ContentPage>
  );
};

export default ExperiencePage;

const CustomContainer= styled(Container)`
  margin-top: 120px;
  margin-bottom: 120px;
  padding: 0 40px;

  @media (max-width: 1250px) {
    margin-top: 80px;
    padding: 0 20px;
  }

  @media (max-width: 990px) {
    margin-top: 60px;
    padding: 0 10px;
  }

  @media (max-width: 500px) {
    margin-top: 60px;
    padding: 0;
  }
`;

const CustomPageHeader = styled(ContentPageHeader)`
  justify-content: center;
  align-items: center;
`;