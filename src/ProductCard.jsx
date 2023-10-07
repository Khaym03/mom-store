import React from 'react'
import { fetchDollar } from './DollarRef'
import './ProductCard.css'

const distributorPricing = {
  acondicionador: 1.1,
  ariel: 0.75,
  cera: 0.5,
  cloro: 0.25,
  desengrasante: 0.96,
  desinfectante: 0.42,
  lavaplatos: 0.74,
  shampoo: 0.86,
  suavizante: 0.52
}

const wholesalePrices = {
    acondicionador: 0.88,
    ariel: 0.6,
    cera: 0.4,
    cloro: 0.25,
    desengrasante: 0.768,
    desinfectante: 0.336,
    lavaplatos: 0.592,
    shampoo: 0.688,
    suavizante: 0.416,
  }

export default function ProductCart() {
  const dollar = fetchDollar()
  const profit = 1.5 // +50%

  const cards = Object.entries(wholesalePrices).map(([prodName, prodPrice], index) => {
    
    return (
      <li key={prodName} className={/*index/2 % 0?'product-card secondary':'product-card tertiary'*/ 'product-card'}>
        <header className='card-title title-medium'>{prodName}</header>
        <ul className='card-row-prices'>
          <li key={'cu-' + prodName} className='center label-large'>{dollar && (prodPrice * parseFloat(dollar.rates.VES) * profit ).toFixed(2)}</li>
          <li key={'half-' + prodName} className='center label-large'>
            {dollar && ((prodPrice * parseFloat(dollar.rates.VES) * profit ) / 2).toFixed(2)}
          </li>
          <li key={'quart-' + prodName} className='center label-large'>
            {dollar && ((prodPrice * parseFloat(dollar.rates.VES) * profit ) / 4).toFixed(2)}
          </li>
        </ul>
      </li>
    )
  })

  return <ul className='card-list'>{cards}</ul>
}
