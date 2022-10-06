import React from 'react'
import QuoteForm from '../quotes/QuoteForm'


const NewQuote = () => {
  const addQuoteHandler = quoteData => {
    console.log(quoteData)
  }
  
  return (
    <QuoteForm onAddQuote={addQuoteHandler } />
  )
}

export default NewQuote