import React from 'react'
import { useTrail, a } from '@react-spring/web'

const Trail = ({ children, ...config }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 3000, friction: 250 },
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0 },
    ...config,
  })
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>{items[index]}</a.div>
      ))}
    </>
  )
}

export default Trail;