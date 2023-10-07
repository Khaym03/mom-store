import React, { useState, useEffect } from 'react'
import './DollarRef.css'

export default function DollarRef() {
  const [dollar, setDollar] = useState(null)
  const url =
    'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=2f024c7db02b4514a6da64ef752a40d8&symbols=VES'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setDollar(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className="dollar-box tertiary">
      {dollar && <div className='dollar-rate on-tertiary-text title-medium'>Tasa BCV: {parseFloat(dollar.rates.VES).toFixed(2)}</div>}
    </div>
  )
}
