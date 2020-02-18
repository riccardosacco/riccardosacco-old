import React, { useEffect } from "react";

const PortfolioSingle = props => {
  //Change document title
  useEffect(() => {
    document.title = props.title;
  });

  const { slug } = props.match.params;

  return (
    <div className="portfolio">
      <div className="container">
        <h2>{slug}</h2>
      </div>
    </div>
  );
};

export default PortfolioSingle;
