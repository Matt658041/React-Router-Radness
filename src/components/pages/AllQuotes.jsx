import React from 'react';
import QuoteList from '../quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text:"learning react is fun" },
  { id: 'q2', author: 'MaxxyPad', text:"learning react is good" }

];

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES } />
  )
}

export default AllQuotes