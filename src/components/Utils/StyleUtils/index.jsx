import styled from 'styled-components';
import { colors } from "../../../constants/styles";

const themeValue = (theme, property, object = colors) => object[theme][property];

const theme = (property, object = colors) => (props) => themeValue(props.theme, property, object);

const vhToPixel = value => `${(window.innerHeight * value) / 100}px`;

const vwToPixel = value => `${(window.innerWidth * value) / 100}px`;

const withNoPointerEvents = (component) => {
  const ResultWrapper = styled(component)`
    pointer-events: none;
  `

  return (props) =>{
    return (
      <ResultWrapper {...props} />
    )
  }
};

export { 
  theme,
  themeValue,
  vhToPixel,
  vwToPixel,
  withNoPointerEvents,
};