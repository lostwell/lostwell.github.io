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
    interval: "March 2022 – Present",
    title: "UI/UX Developer - Senior UI/UX Developer",
    subtitle: "Codev by Zylun Philippines Inc. – Makati City, Philippines",
    details: [
      'Handles a client’s enterprise network system for supply chain management.',
      'Develops and maintains web apps built with React, Mobx, and ExtJS.',
      'Develops and troubleshoots pages, reports, forms, widgets, and dashboards.',
      'Conceptualizes and implements functional requirements into scalable and reusable project components.', 
      'Provides test coverage and documentation for new and legacy components.',
      'Provides support and assistance to fellow colleagues in areas of expertise.',
      'Collaborates with other teams, departments, and QA for technical support.',
    ]
  },
  {
    interval: "June 2021 – March 2022",
    title: "Front-End Developer",
    subtitle: "Whitecloak Technologies, Inc. – Pasig City, Philippines",
    details: [
      'Handled a client’s corporate banking and system management web applications.',
      'Developed and maintained web apps built with React, Redux, and Redux-Saga.',
      'Developed features for rendering and managing bank documents.',
      'Troubleshoots project components to comply with responsive web design.',
      'Coordinated with multiple teams for testing, QA, and troubleshooting of APIs.',
    ]
  },
  {
    interval: "February 2020 – June 2021",
    title: "Web Developer",
    subtitle: "Dottystyle Creative Co. – Makati City, Philippines",
    details: [
      'Handled a client’s engagement administration and analytics web application.',
      'Developed and maintained React, Redux, and jQuery-based web apps.',
      'Interpreted client needs and designed mockups for new pages and features.',
      'Implemented WordPress, React web sites from concept to deployment.',
      'Implemented charting libraries for data analytics and visualization features.',
      'Implemented web animation libraries for developing banners and automated email responses.',
    ]
  },
  {
    interval: "June 2019 – August 2019",
    title: "Technical Content Creator (Internship)",
    subtitle: "Nokia Manila Technology Center – Quezon City, Philippines",
    details: [
      'Created and migrated technical manuals to XML using DITA guidelines.',
      'Led a small internship team to develop an automated peer evaluation web app.',
    ]
  },
];