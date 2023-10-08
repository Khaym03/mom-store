import React from 'react'
import { fetchDollar } from './DollarRef'
import { FaBottleWater } from 'react-icons/fa6'
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
  suavizante: 0.416
}

const HeaderCard = ({ prodName }) => (
  <header className="card-header">
    <span className="card-icon-area center">
      <FaBottleWater size="3rem" />
    </span>
    <span className="card-text-area label-large center">{prodName}</span>
  </header>
)

const CellPrice = ({ unit, prodName, salePrice }) => (
  <li key={unit + '-' + prodName} className="center label-medium">
    {salePrice}
  </li>
)

export default function ProductCart() {
  const dollar = fetchDollar()
  const profit = 1.5 // +50%

  const cards = Object.entries(wholesalePrices).map(
    ([prodName, prodPrice], index) => {
      return (
        <li
          key={prodName}
          className={
            /*index/2 % 0?'product-card secondary':'product-card tertiary'*/ 'product-card'
          }
        >
          <HeaderCard prodName={prodName} />
          <ul className="card-row-prices">
            <CellPrice
              unit="cu"
              prodName={prodName}
              salePrice={
                dollar &&
                (prodPrice * parseFloat(dollar.rates.VES) * profit).toFixed(2)
              }
            />
            <CellPrice
              unit="half"
              prodName={prodName}
              salePrice={
                dollar &&
                (
                  (prodPrice * parseFloat(dollar.rates.VES) * profit) /
                  2
                ).toFixed(2)
              }
            />
            <CellPrice
              unit="quart"
              prodName={prodName}
              salePrice={
                dollar &&
                (
                  (prodPrice * parseFloat(dollar.rates.VES) * profit) /
                  4
                ).toFixed(2)
              }
            />
          </ul>
        </li>
      )
    }
  )

  return <ul className="card-list">{cards}</ul>
}
