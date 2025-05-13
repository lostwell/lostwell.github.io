import { useSpring, animated, config } from '@react-spring/web';
import { useDispatch } from 'react-redux';

import { vhToPixel } from '../../components/Utils';
import { setToggleState } from '../../redux/reducers/theme/toggleStateSlice';

const useWrapper = (component, theme) => {
  const dispatch = useDispatch();

  const animatedComponent = animated(component);

  const spring = useSpring({
    config: config.slow,
    from: {
      top: `${vhToPixel(120)}`,
    },
    to: [
      {
        top: `${vhToPixel(2)}`,
      },
    ],
    onRest: (result, controller) => {
      controller.stop()
      dispatch(setToggleState('enabled'))
    }
  });

  return [animatedComponent, spring];
};

const useFeatured = (component) => {
  const animatedComponent = animated(component);

  const spring = useSpring({
    config: config.slow,
    from: {
      marginTop: `${vhToPixel(45)}`,
      position: 'relative',
      transform: 'scale(0)',
    },
    to: [
      {
        marginTop: `${vhToPixel(0)}`,
        transform: 'scale(1)',
      },
      {
        marginTop: `${vhToPixel(-90)}`,
        transform: 'scale(0)',
      },
    ]
  });

  return [animatedComponent, spring];
};

const useContent = (component, theme) => {
  const animatedComponent = animated(component);

  const spring = useSpring({
    config: config.slow,
    from: {
      opacity: 0,
      marginTop: `${vhToPixel(100)}`,
    },
    to: [
      {
        opacity: 1,
        marginTop: `${vhToPixel(80)}`,
      },
      {
        opacity: 1,
        marginTop: `${vhToPixel(0)}`,
      },
    ]
  });

  return [animatedComponent, spring];
};

export {
  useWrapper,
  useFeatured,
  useContent,
};