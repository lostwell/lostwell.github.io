import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';

import ContentPage from './ContentPage';
import { theme } from '../components/Utils';
import ContentPageHeader from '../components/Headers/ContentPageHeader';

const OverviewPage = (props) => {

  return (
    <ContentPage theme={props.theme} feature="overview">
      <ContentContainer>
        <Row>
          <Col><Profile theme={props.theme}/></Col>
          <Col lg={7} xl={8}>
            <ContentPageHeader theme={props.theme}>
              <h2>Front-end Developer</h2>
              <h3>Louel Lagasca</h3>
              <p>
                A creative and quality-oriented developer who is proficient at designing and developing 
                well-thought-out projects that strive for both optimal functionality and elegant design. 
                Looking to use and expand current skill set in web development, responsive design, UI/UX design, 
                and graphic design to contribute to company growth and success. Technical Skills Include:
              </p>
            </ContentPageHeader>
          </Col>
        </Row>
        <CustomRow theme={props.theme}>
          <Col sm={10} md={6}>
            <h6>Development Tools & Frameworks</h6>
            <ListGroup className="skill-list">
              <ListGroup.Item>HTML <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>CSS <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>Sass <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>React <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>Redux <ProgressBar now={90}/> </ListGroup.Item>
              <ListGroup.Item>ExtJS <ProgressBar now={90}/> </ListGroup.Item>
              <ListGroup.Item>MobX <ProgressBar now={90}/> </ListGroup.Item>
              <ListGroup.Item>jQuery <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>Bootstrap <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>DC/D3 JS <ProgressBar now={80}/> </ListGroup.Item>
              <ListGroup.Item>React Spring <ProgressBar now={80}/> </ListGroup.Item>
              <ListGroup.Item>Git <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>Perforce <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>GSAP <ProgressBar now={60}/> </ListGroup.Item>
              <ListGroup.Item>Laravel Blades <ProgressBar now={60}/> </ListGroup.Item>
              <ListGroup.Item>Wordpress <ProgressBar now={60}/> </ListGroup.Item>
              <ListGroup.Item>SQL <ProgressBar now={90}/> </ListGroup.Item>
              <ListGroup.Item>Apache <ProgressBar now={70}/> </ListGroup.Item>
              <ListGroup.Item>Linux <ProgressBar now={70}/> </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h6>Programming Languages</h6>
            <ListGroup className="skill-list">
              <ListGroup.Item>Javascript <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>TypeScript <ProgressBar now={80}/> </ListGroup.Item>
              <ListGroup.Item>PHP <ProgressBar now={70}/> </ListGroup.Item>
              <ListGroup.Item>Java <ProgressBar now={70}/> </ListGroup.Item>
              <ListGroup.Item>Python <ProgressBar now={30}/> </ListGroup.Item>
            </ListGroup>
            <h6>Software Tools</h6>
            <ListGroup className="skill-list">
              <ListGroup.Item>Adobe XD <ProgressBar now={100}/> </ListGroup.Item>
              <ListGroup.Item>Adobe Illustrator <ProgressBar now={90}/> </ListGroup.Item>
              <ListGroup.Item>Adobe Photoshop <ProgressBar now={75}/> </ListGroup.Item>
              <ListGroup.Item>Microsoft Office </ListGroup.Item>
              <ListGroup.Item>Google Suite </ListGroup.Item>
            </ListGroup>
          </Col>
        </CustomRow>
      </ContentContainer>
    </ContentPage>
  );
};

export default OverviewPage;


const Profile = (props) => {
  return <StyledProfileWrapper theme={props.theme}>
    <StyledProfile theme={props.theme}/>
  </StyledProfileWrapper>;
};

const StyledProfileWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  border: 5px solid ${theme('cardStroke')};
  background-color: ${theme('highlightFill')};
  border-radius: 10px;
  padding: 20px;
  margin: 0 20px auto auto;

  @media (max-width: 1230px) {
    padding: 15px;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    padding: 15px;
    margin: 20px auto;
  }

  @media (max-width: 500px) {
    padding: 10px;
    margin: 20px auto;
  }
`;

const StyledProfile = styled.div`
  width: 240px;
  height: 240px;
  background-image: url(${theme('profile')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  border-radius: 10px;

  @media (max-width: 1325px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 1000px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 500px) {
    width: 140px;
    height: 140px;
  }
`;

const ContentContainer = styled(Container)`
  margin-top: 120px;
  padding: 0 40px;

  @media (max-width: 1250px) {
    margin-top: 80px;
    padding: 0 40px;
  }

  @media (max-width: 990px) {
    margin-top: 40px;
    padding: 0 30px;
  }

  @media (max-width: 500px) {
    margin-top: 40px;
    padding: 0 30px;
  }
`;

const CustomRow = styled(Row)`
  margin-top: 100px;
  margin-bottom: 80px;
  
  & .list-group-item{
    border: none;
    color: ${theme('fontColor')};
    background-color: ${theme('highlightFill')};
    padding: 15px 20px;
  }

  & h6 {
    font-family: 'Staatlitches';
    color: ${theme('headerColor')};
    text-shadow: 1px 1px 0 ${theme('accentColor')};
    letter-spacing: 1px;
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  & .progress-bar {
    background-color: ${theme('progressBar')};
    
  }

  & .progress {
    background-color: ${theme('progress')};
    height: 5px;
  }

  & .skill-list {
    margin-bottom: 40px;
  }
  
  @media (max-width: 1250px) {
    margin-top: 80px;
  }

  @media (max-width: 990px) {
    margin-top: 40px;
  }

  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;