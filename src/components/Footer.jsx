import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import Logo from './Logo';
import { Icon, InView } from "../components"
import { theme, themeValue } from '../components/Utils';

const Footer = (props) => {
  const {theme} = props;
  const mailColor = themeValue(theme, 'mailColor');

  return (
    <FooterContainer theme={theme}>
      <Container className="footer-container">
        <InView>
          <Brand theme={theme}>
            <div>Lostwell</div>
            <Logo style={{margin: '-5px 0 0 10px', width: '35px', height: '35px'}}/>
          </Brand>
        </InView>
        <InView>
          <div className="footer-details-container">
            <div>
              <Icon 
                icon="user" 
                size={15}
                fill={'transparent'} 
                stroke={themeValue(theme, 'fontColor')}
                {...{strokeWidth: 3}}
              /> 
              Louel Lagasca
            </div>
            <div>
              <Icon
                icon="briefcase"
                size={15}
                fill={'transparent'} 
                stroke={themeValue(theme, 'fontColor')}
                {...{strokeWidth: 2}}
              />
              Front-End Developer &amp; Designer
            </div>
            <a
              rel="noreferrer"
              href="mailto:louellagasca@gmail.com"
              target="_blank"
              style={{color: mailColor}}
            >
              <div>
                <Icon
                  icon="mail"
                  size={15}
                  fill={'transparent'} 
                  stroke={themeValue(theme, 'fontColor')}
                  {...{strokeWidth: 2}}
                />
                  louellagasca@gmail.com
              </div>
            </a>
          </div>
        </InView>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${theme('cardFill')};
  color: ${theme('fontColor')};
  position: relative;
  margin-top: 250px;
  padding: 60px 30px 30px 30px;
  padding-bottom: 0;
  backdrop-filter: ${theme('backdropBlur')};
  -webkit-backdrop-filter: ${theme('backdropBlur')};
  border-top: 3px solid ${theme('cardStroke')};

  .footer-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 30px;
    border-radius: 20px 20px 0 0;
    background-color: ${theme('highlightFill')};
    border-top: 3px solid ${theme('cardStroke')};
    border-left: 3px solid ${theme('cardStroke')};
    border-right: 3px solid ${theme('cardStroke')};
  }

  .footer-details-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h5 {
    font-family: 'Staatlitches';
    font-size: 1.5em;
    text-shadow: 2px 2px 0 ${theme('accentColor')};
    letter-spacing: 5px;
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 1250px) {
    padding: 30px;
    padding-bottom: 0;
  }

  @media (max-width: 990px) {
    padding: 30px 20px;
    padding-bottom: 0;
  }

  @media (max-width: 500px) {
    padding: 30px 10px;
    padding-bottom: 0;
  }
`;

const Brand = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 3em;
  line-height: 1.5em;
  color: ${theme('fontColor')};
  margin: 5px 0;
`;