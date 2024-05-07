import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import ProductCard from './componentes/product_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './Resources/logo.png'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [productData, setProductData] = useState({
    product_url: '',
    positive_comments_summary: '',
    critical_comments_summary: ''
  });

  // Dentro del componente App
  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/reviews-summary/?search=${searchTerm}`);
      const data = await response.json();
      console.log(response)
      setProductData(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  return (
    <div className="App">
      <div className='contenedor-padre d-flex justify-content-center'>
        {/* Agregar el título y el logo */}
        <div className="logo mb-3">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Barra de búsqueda */}
        <div className="search-bar mb-4">
          <p>Review Radar es una potente herramienta diseñada para analizar y sintetizar opiniones en línea sobre productos. Con la capacidad de recopilar comentarios de diversas fuentes en la web, esta aplicación permite a los usuarios identificar las opiniones más recurrentes y evaluar si son mayormente favorables o desfavorables. Review Radar ofrece a sus usuarios una visión clara y rápida de cómo se percibe un producto en el mercado, facilitando así la toma de decisiones informadas y estratégicas.</p>
          <Form inline="true">
            <div className="search-input-container">
            <FormControl
              type="text"
              placeholder="Ingresa el producto del que deseas comentarios"
              className="mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
              <Button
                variant="link"
                className="search-button"
                onClick={() => handleSearch(searchTerm)}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </div>
          </Form>
        </div>
        {/* Componente de productos */}
        <div className="product-cards-container">
          <ProductCard
            productUrl={productData.product_url}
            positiveCommentsSummary={productData.positive_comments_summary}
            criticalCommentsSummary={productData.critical_comments_summary}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
