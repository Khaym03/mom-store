import React from 'react'
import { createRoot } from 'react-dom/client'
import DraggableArea from './DraggableArea'
import NavBar from './NavBar'
const root = createRoot(document.getElementById('app'))

root.render(
  <>
    <DraggableArea />
    <NavBar />
  </>
)
