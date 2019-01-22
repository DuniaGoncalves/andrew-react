import React from 'react';

const PortfolioItemPage = (props) => (
  <div>
    <h2>A Thing I've done</h2>
    <p>This is my items {props.match.params.id}</p>
  </div>
);

export default PortfolioItemPage;
