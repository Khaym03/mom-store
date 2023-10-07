import React from 'react'

const style = {
  WebkitAppRegion: 'drag',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: ' 35px',
  display: 'flex',
  justifyContent: 'flex-end',
  backgroundColor: '#191c1d',
  zIndex: '10'
}

export default function DraggableArea() {
  return <section style={style}></section>
}
