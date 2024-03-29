import { useInView, animated } from '@react-spring/web'

const InView = ({delay, config, args, children, className}) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 50,
      },
      to: {
        opacity: 1,
        x: 0,
      },
      delay: delay,
      ...config,
    }),
    {
      ...args,
    }
  );

  return (
    <animated.div ref={ref} style={springs} className={className}>
      {children}
    </animated.div>
  );
};

export default InView;