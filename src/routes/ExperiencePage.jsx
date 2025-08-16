import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { Timeline, Event } from "react-timeline-scribble";

import ContentPage from './ContentPage';
import ContentPageHeader from '../components/Headers/ContentPageHeader';
import { InView, TimelineContainer } from '../components';

const ExperiencePage = (props) => {

  return (
    <ContentPage theme={props.theme} feature="experience">
      <CustomContainer theme={props.theme}>
        <CustomPageHeader theme={props.theme}>
          <InView><h2>Work Experience</h2></InView>
          <InView><h3>Louel Lagasca</h3></InView>
        </CustomPageHeader>
        <InView>
          <TimelineContainer theme={props.theme}>
            <InView>
              <Timeline>
                {eventData.map((props) => <EventView {...props} />)}
              </Timeline>
            </InView>
          </TimelineContainer>
        </InView>
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

const EventView = ({interval, title, subtitle, details}) => {
  return <InView>
    <Event
      interval={interval}
      title={title}
      subtitle={subtitle}
    >
      <ul className="details">
        {details.map((item) => <InView><li>{item}</li></InView>)}
      </ul>
    </Event>
  </InView>;
}

const eventData = [
  {
    interval: "July 2025 – Present",
    title: "Senior UI Implementation Engineer",
    subtitle: "BetCloud – Melbourne, Australia",
    details: [
      'Oversees and maintains the company’s online betting platforms, systems, and services, ensuring reliability and performance across multiple brands and products.',
      'Designs, develops, and documents reusable UI components, with a focus on pixel-perfect, responsive, and visually engaging user experiences.',
      'Troubleshoots and resolves UI rendering issues across browsers and devices, and implements UI animations to enhance user interaction.',
      'Upholds code quality and consistency by enforcing company coding standards, best practices, and scalable design patterns.',
      'Mentors and supports colleagues, sharing expertise and providing technical assistance as needed.',
      'Actively participates in cross-functional brainstorming sessions with leadership and senior staff to drive new features and product enhancements.',
      'Collaborates with management, developers, designers, and QA to ensure thorough testing, technical support, and product polish.',
    ]
  },
  {
    interval: "March 2022 – July 2025",
    title: "UI/UX Developer - Senior UI/UX Developer",
    subtitle: "Codev by Zylun Philippines Inc. – Makati City, Philippines",
    details: [
      'Managed and enhanced a client’s enterprise network system for supply chain management.',
      'Developed, maintained, and troubleshooted web applications, pages, reports, forms, widgets, and dashboards using React, MobX, and ExtJS.',
      'Transformed functional requirements into scalable, reusable, and well-documented project components with comprehensive test coverage and documentation.',
      'Supported and mentored colleagues, and collaborated with cross-functional teams and QA for technical support and project delivery.',
    ]
  },
  {
    interval: "June 2021 – March 2022",
    title: "Front-End Developer",
    subtitle: "Whitecloak Technologies, Inc. – Pasig City, Philippines",
    details: [
      'Developed and maintained corporate banking and system management web applications for a client, using React, Redux, and Redux-Saga.',
      'Implemented features for rendering and managing bank documents, ensuring responsive design and cross-device compatibility.',
      'Collaborated with multiple teams for testing, QA, and API troubleshooting to ensure robust and reliable application delivery.',
    ]
  },
  {
    interval: "February 2020 – June 2021",
    title: "Web Developer",
    subtitle: "Dottystyle Creative Co. – Makati City, Philippines",
    details: [
      'Developed and maintained engagement administration and analytics web applications using React, Redux, jQuery, and WordPress.',
      'Transformed client requirements into mockups and delivered full-featured websites from concept to deployment.',
      'Integrated charting and animation libraries for data visualization, banners, and automated email responses.',
    ]
  },
  {
    interval: "June 2019 – August 2019",
    title: "Technical Content Creator (Internship)",
    subtitle: "Nokia Manila Technology Center – Quezon City, Philippines",
    details: [
      'Created and migrated technical manuals to XML using DITA guidelines, and led a small team to develop an automated peer evaluation web app.',
    ]
  },
];