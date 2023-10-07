import React from 'react'
import { createRoot } from 'react-dom/client'
import DraggableArea from './DraggableArea'
import NavBar from './NavBar'
import DollarRef from './DollarRef'
import ProductCart from './ProductCard'
const root = createRoot(document.getElementById('app'))

root.render(
  <>
    <DraggableArea />
    <NavBar />
    <main id="main-content">
      <section id="info-bar">
        <DollarRef />
      </section>
      <section id='product-wrapper'>
        <ProductCart/>
      </section>
    </main>
  </>
)
