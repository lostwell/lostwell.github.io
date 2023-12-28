import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { Timeline, Event } from "react-timeline-scribble";
import "react-image-lightbox/style.css";

import ContentPage from './ContentPage';
import ContentPageHeader from '../components/Headers/ContentPageHeader';
import { theme } from '../components/Utils';
import { InView, TimelineContainer } from '../components';
import { Gallery } from '../components';

const EducationPage = (props) => {
  return (
    <ContentPage theme={props.theme} feature="education">
      <CustomContainer theme={props.theme}>
        <CustomPageHeader theme={props.theme}>
          <InView><h2>Saint Louis University</h2></InView>
          <InView><h3>Baguio Philippines</h3></InView>
        </CustomPageHeader>
        <Row>
          <Col>
            <TimelineContainer theme={props.theme}>
              <Timeline>
                {eventData.map((props) => <EventView {...props} />)}
              </Timeline>
            </TimelineContainer>
          </Col>
        </Row>
        <ContentContainer theme={props.theme}>
          <InView><h5>Sample Coursework & Publications</h5></InView>
          <Col className='gallery-container'>
            <Gallery theme={props.theme} />
          </Col>
        </ContentContainer>
      </CustomContainer>
    </ContentPage>
  );
};

export default EducationPage;

const ContentContainer = styled(Row)`
  padding: 0px 10px;

  @media (max-width: 1250px) {
    padding: 0 40px;
  }

  @media (max-width: 990px) {
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    padding: 0 20px;
  }

  .gallery-container{
    border-radius: 20px;
    padding: 40px 40px;
    background-color: ${theme('highlightFill')};
    backdrop-filter: ${theme('highlightBackdropBlur')};
  }
`;

const CustomContainer = styled(Container)`
  margin-top: 120px;
  margin-bottom: 120px;
  padding: 0 40px;

  h5 {
    font-family: 'Staatlitches';
    color: ${theme('headerColor')};
    text-shadow: 2px 2px 0 ${theme('accentColor')};
    letter-spacing: 2px;
    font-size: 2em;
    text-align: center;
    margin: 140px auto 40px auto;
  }

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
    interval: "2015 – 2019",
    title: "Bachelor of Science Major in Computer Science",
    subtitle: "Saint Louis University (SLU) – Baguio City, Philippines",
    details: [
      'Excelled in programming, development, and design coursework.',
      'Public Relations Officer for the organization: Integrated Confederacy (ICON).',
      'Created publication materials and administered events which helped increase organization visibility.',
    ]
  },
];