import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product_card.css";

function ProductCard({ productUrl, positiveCommentsSummary, criticalCommentsSummary, searchTerm }) {
  return (
    <div className="card" style={{ width: "40%" }}>
      <div className="card-body">
        <h5 className="card-title">{searchTerm}</h5>
        <p className="card-text">
          Aquí encontrarás la mejor reseña y la peor reseña.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{positiveCommentsSummary}</li>
        <li className="list-group-item">{criticalCommentsSummary}</li>
      </ul>
      <div className="card-body">
        <a href={productUrl} className="card-link">
          Link a un sitio de venta
        </a>
      </div>
    </div>
  );
}

export default ProductCard;