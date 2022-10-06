import React, { Fragment } from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../comments/Comments';

const QuoteDetail = () => {
  const params = useParams()
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail