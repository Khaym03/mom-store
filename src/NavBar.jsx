import React from 'react'
import { MdDashboard, MdBook, MdReceiptLong } from 'react-icons/md'
import './Navbar.css'

const UlElements = () => {
  const listOfIcons = [
    [MdDashboard, 'Productos'],
    [MdBook, 'Deudores'],
    [MdReceiptLong, 'Factura']
  ]

  const listItems = listOfIcons.map(([Icon, text]) => (
    <li key={'icon-' + text}>
      <a className="nav-bar-ul-anchor">
        <span className="icon-wrapper">
          <Icon  size='1.5rem'/>
        </span>

        <span className="icon-name body-small">{text}</span>
      </a>
    </li>
  ))

  return <ul className="nav-bar-ul">{listItems}</ul>
}

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <UlElements />
    </nav>
  )
}
