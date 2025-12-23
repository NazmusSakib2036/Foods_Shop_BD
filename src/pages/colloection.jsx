import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/collection.css';
import { productsData } from './productView';
import Dog_F from '../product_image/dog_F.png';
import Cat_F from '../product_image/cat_f.png';
import Fish_F from '../product_image/fish_f.png';
import Bird_F from '../product_image/bird_f.png';

const Collection = () => {
  const navigate = useNavigate();

  // Collection categories
  const collections = [
    {
      id: 1,
      name: 'Dog Food (কুকুরের খাবার)',
      image: Dog_F,
    },
    {
      id: 2,
      name: 'Cat Food (বিড়ালের খাবার)',
      image: Cat_F,
    },
    {
      id: 3,
      name: 'Fish Food (মাছের খাবার)',
      image: Fish_F,
    },
    {
      id: 4,
      name: 'Bird Food (পাখির খাবার)',
      image: Bird_F,
    }
    
  ];

  // Get product count for each category
  const getProductCount = (categoryName) => {
    return productsData.filter(product => product.category === categoryName).length;
  };

  // Handle category click
  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="collection-section">
      <div className="collection-container">
        <h2 className="collection-title">COLLECTION</h2>
        
        <div className="collection-grid">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="collection-card"
              onClick={() => handleCategoryClick(collection.name.split('(')[0].trim())}
            >
              {/* Checkmark Icon */}
              <div className="collection-check">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>

              {/* Collection Image */}
              <div className="collection-image">
                <img src={collection.image} alt={collection.name} />
              </div>

              {/* Collection Name */}
              <h3 className="collection-name">{collection.name}</h3>
              
              {/* Product Count */}
              <p className="collection-product-count">
                {getProductCount(collection.name.split('(')[0].trim())} Products
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
