import { useSpring, animated, config } from '@react-spring/web';
import { useDispatch } from 'react-redux';

import { themeValue, vhToPixel, vwToPixel } from '../../components/Utils';
import { setToggleState } from '../../redux/reducers/theme/toggleStateSlice';

const useHeader = (component, theme) => {
  const dispatch = useDispatch();

  const animatedComponent = animated(component);

  const spring = useSpring({
    config: config.slow,
    from: {
      top: `${vhToPixel(120)}`,
      width: `150px`,
      height: `150px`,
      border: `2px solid transparent`,
      backgroundColor: `transparent`,
      borderRadius: '0%',
    },
    to: [
      {
        top: `${vhToPixel(33)}`,
        width: `150px`,
        height: `150px`,
        border: `2px solid transparent`,
        borderRadius: '100%',
      },
      {
        top: `${vhToPixel(23)}`,
        width: '538px',
        height: '280px',
        border: `2px solid ${themeValue(theme, 'wrapperStroke')}`,
        borderRadius: '0%',
      },
    ],
    onRest: (result, controller) => {
      controller.stop()
      dispatch(setToggleState('enabled'))
    }
  });

  return [animatedComponent, spring];
};

const useContainer = (component, theme) => {
  const animatedComponent = animated(component);

  const spring = useSpring({
    config: config.slow,
    from: {
      width: '100%',
      height: '100%',
      border: `7px solid transparent`,
      borderRadius: '0%',
    },
    to: [
      {
        border: `5px solid ${themeValue(theme, 'cardStroke')}`,
        borderRadius: '100%',
      },
      {
        borderRadius: '0%',
        border: `5px solid ${themeValue(theme, 'cardStroke')}`,
      },
    ]
  });

  return [animatedComponent, spring];
};

const useInfo = (component) => {
  const animatedComponent = animated(component);

  const spring = useSpring({
    config: config.slow,
    from: {
      x: `${vwToPixel(0)}`,
      y: `${vwToPixel(100)}`,
      opacity: 0,
    },
    to: [
      {
        x: `${vwToPixel(-11)}`,
        y: `${vwToPixel(51)}`,
        opacity: 0,
      },
      {
        x: `${vwToPixel(0)}`,
        y: `${vwToPixel(0)}`,
        opacity: 1,
      },
    ]
  });

  return [animatedComponent, spring];
};

const useDivider = (component, theme) => {
  const animatedComponent = animated(component);

  const spring = useSpring({
    config: config.slow,
    from: {
      x: `${vwToPixel(0)}`,
      y: `${vwToPixel(100)}`,
      opacity: 0,
      borderBottom: `0px solid ${themeValue(theme, 'cardFill')}`,
    },
    to: [
      {
        x: `${vwToPixel(-11)}`,
        y: `${vwToPixel(51)}`,
        opacity: 0,
        borderBottom: `2px solid ${themeValue(theme, 'cardFill')}`,
      },
      {
        x: `${vwToPixel(0)}`,
        y: `${vwToPixel(0)}`,
        opacity: 1,
        borderBottom: `2px solid ${themeValue(theme, 'separatorFill')}`,
      },
    ]
  });

  return [animatedComponent, spring];
};

const useThemeIcon = (component) => {
  const animatedComponent = animated(component);

  const spring = useSpring({
    config: config.slow,
    from: {
      width: `${vhToPixel(7)}`,
      height: `${vhToPixel(7)}`,
      position: 'absolute',
      opacity: 0,
      top: `${vhToPixel(45)}`,
      rotate: 0,
      scale: 0,
    },
    to: [
      {
        opacity: 1,
        top: `${vhToPixel(3.5)}`,
        rotate: 720,
        scale: 1,
      },
      {
        top: `${vhToPixel(-60)}`,
        opacity: 0,
        rotate: 0,
        scale: 0,
      },
    ]
  });

  return [animatedComponent, spring];
};

export {
  useHeader,
  useContainer,
  useInfo,
  useDivider,
  useThemeIcon,
};