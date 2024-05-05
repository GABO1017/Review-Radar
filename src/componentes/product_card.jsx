import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product_card.css";

function ProductCard() {
  return (
    <div class="card" style={{ width: "40%"}}>
      <img
        src="https://primefaces.org/cdn/primereact/images/landing/air-jordan.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Jordan</h5>
        <p class="card-text">
          Aqui encontraras la mejor reseña, la mas comun y la peor.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Mejor reseña</li>
        <li class="list-group-item">Reseña mas comun</li>
        <li class="list-group-item">Peor reseña</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Link a un sitio de venta
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
