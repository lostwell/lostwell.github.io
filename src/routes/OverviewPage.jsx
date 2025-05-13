import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';

import ContentPage from './ContentPage';
import ContentPageHeader from '../components/Headers/ContentPageHeader';
import { theme, themeValue } from '../components/Utils';
import { InView } from '../components';

const OverviewPage = (props) => {

  return (
    <ContentPage theme={props.theme} feature="overview">
      <ContentContainer>
        <Row>
          <Col>
              <Profile theme={props.theme}/>
          </Col>
          <Col lg={7} xl={8}>
            <ContentPageHeader theme={props.theme}>
              <InView><h2>Senior Front-end Developer</h2></InView>
              <InView><h3>Louel Lagasca</h3></InView>
              <InView><p>
                A creative and quality-oriented developer who is proficient at designing and developing 
                well-thought-out projects that strive for both optimal functionality and elegant design. 
                Looking to use and expand current skill set in web development, responsive design, UI/UX design, 
                and graphic design to contribute to company growth and success. Technical Skills Include:
              </p></InView>
            </ContentPageHeader>
          </Col>
        </Row>
        <CustomRow theme={props.theme}>
            <Col sm={10} md={6}>
              <InView>
                <h6>Programming Languages</h6>
                <ListGroup className="skill-list">
                  {programSkillData.map((props) => <ListItem {...props}/>)}
                </ListGroup>
              </InView>
              <InView>
                <h6>Development Tools & Libraries</h6>
                <ListGroup className="skill-list">
                  {devToolSkillData.map((props) => <ListItem {...props}/>)}
                </ListGroup>
              </InView>
            </Col>
            <Col>
              <InView>
                <h6>Development Frameworks</h6>
                <ListGroup className="skill-list">
                  {devFrameworkSkillData.map((props) => <ListItem {...props}/>)}
                </ListGroup>
              </InView>
              <InView>
                <h6>Software Tools</h6>
                <ListGroup className="skill-list">
                  {toolSkillData.map((props) => <ListItem {...props}/>)}
                </ListGroup>
              </InView>
            </Col>
        </CustomRow>
      </ContentContainer>
    </ContentPage>
  );
};

export default OverviewPage;


const Profile = (props) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return <InView><StyledProfileWrapper theme={props.theme}>
      {!hasLoaded && <SpinnerContainer theme={props.theme}><Spinner animation="border" /></SpinnerContainer>}
      <StyledProfile
        theme={props.theme}
        alt="Louel Lagasca"
        className={hasLoaded? '' : 'hidden'}
        src={themeValue(props.theme, 'profile')}
        onLoad={() => setHasLoaded(true)}
      />
    
  </StyledProfileWrapper></InView>;
};

const StyledProfileWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border: 5px solid ${theme('cardStroke')};
  background-color: ${theme('highlightFill')};
    backdrop-filter: ${theme('highlightBackdropBlur')};
  border-radius: 10px;
  padding: 20px;
  margin: 0 20px auto auto;

  .hidden{
    display: none;
  }

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

const StyledProfile = styled.img`
  width: 240px;
  height: 240px;
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

const SpinnerContainer = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme('imageFill')};
  background-image: url(${theme('profileMin')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  color: ${theme('cardFillOpaque')};

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
  margin-top: 100px;
  padding: 0 40px;

  @media (max-width: 1250px) {
    margin-top: 50px;
    padding: 0 40px;
  }

  @media (max-width: 990px) {
    margin-top: 10px;
    padding: 0 30px;
  }

  @media (max-width: 500px) {
    margin-top: 5px;
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
    backdrop-filter: ${theme('highlightBackdropBlur')};

    & > :last-child{
      border-radius: 0 0 10px 10px;
    }

    & > :first-child{
      border-radius: 10px 10px 0 0;
    }
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

const ListItem = ({label, progress}) => {
  return <InView>
    <ListGroup.Item style={{overflow: 'hidden'}}>
      <span>{label}</span>
      {progress && <ProgressBar now={progress}/>}
    </ListGroup.Item>
  </InView>
}

const devToolSkillData = [
  { label: 'HTML', progress: 100 },
  { label: 'CSS', progress: 100 },
  { label: 'Sass', progress: 100 },
  { label: 'Bootstrap', progress: 100 },
  { label: 'Tailwind CSS', progress: 85 },
  { label: 'Material UI', progress: 85 },
  { label: 'NodeJS', progress: 60 },
  { label: 'Redux', progress: 90 },
  { label: 'MobX', progress: 90 },
  { label: 'D3 JS', progress: 80 },
  { label: 'jQuery', progress: 100 },
  { label: 'React Spring', progress: 90 },
  { label: 'Framer Motion', progress: 90 },
  { label: 'GSAP', progress: 75 },
  { label: 'Git', progress: 100 },
  { label: 'Jira', progress: 100 },
  { label: 'Perforce', progress: 100 },
  { label: 'Wordpress', progress: 60 },
  { label: 'Drupal', progress: 60 },
  { label: 'WebGL', progress: 50 },
  { label: 'MySQL', progress: 70 },
  { label: 'Linux', progress: 50 },
];

const devFrameworkSkillData = [
  { label: 'React', progress: 100 },
  { label: 'ExtJS', progress: 90 },
  { label: 'Vue', progress: 70 },
  { label: 'Angular', progress: 70 },
  { label: 'NextJS', progress: 60 },
  { label: 'Unity', progress: 85 },
  { label: 'Apache', progress: 40 },
];

const programSkillData = [
  { label: 'JavaScript', progress: 100 },
  { label: 'TypeScript', progress: 90 },
  { label: 'C#', progress: 85 },
  { label: 'PHP', progress: 70 },
  { label: 'Java', progress: 70 },
  { label: 'Python', progress: 50 },
  { label: 'R', progress: 15 },
];

const toolSkillData = [
  { label: 'Adobe XD', progress: 100 },
  { label: 'Adobe Illustrator', progress: 90 },
  { label: 'Adobe Photoshop', progress: 75 },
  { label: 'Figma', progress: 90 },
  { label: 'Canva', progress: 70 },
  { label: 'Sketch', progress: 70 },
  { label: 'Zeplin', progress: 70 },
  { label: 'Microsoft Office' },
  { label: 'Google Suite' },
];