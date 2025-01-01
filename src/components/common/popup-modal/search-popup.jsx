
// const SearchPopup = ({isSearchOpen,setIsSearchOpen}) => {
//     const handleSubmit = e => {
//       e.preventDefault();
//     }
//     return (
//         <div className={`edu-search-popup ${isSearchOpen ? 'open' : ''}`}>
//             <div className="content-wrap">
//                 <div className="site-logo">
//                     <img className="logo-light" src='/assets/images/logo/logo.jpg' alt="logo" />
                    
//                 </div>
//                 <div className="close-button" onClick={() => setIsSearchOpen(false)}>
//                     <button className="close-trigger" aria-label="Name"><i className="icon-73"></i></button>
//                 </div>
//                 <div className="inner">
//                     <form className="search-form" onSubmit={handleSubmit}>
//                         <input type="text" className="edublink-search-popup-field" placeholder="Search Here..." />
//                         <button className="submit-button" aria-label="Name"><i className="icon-2"></i></button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SearchPopup;

{/*New code added 31/12/2024*/}

import React, { useState } from 'react';
import Link from 'next/link';

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {

    const products = [
        { id: 1, name: 'Spoken English', link: '/spoken-class' },
        { id: 2, name: 'IELTS', link: '/ielts' },
        { id: 3, name: 'CELPIP', link: '/celpip' },
        { id: 4, name: 'TOEFL', link: '/toefl' },
        { id: 5, name: 'PTE', link: '/pte' },
        { id: 6, name: 'Competitive English Training', link: '/competitive-exam' },
        { id: 7, name: 'Language Training', link: '/language-training' },
        { id: 8, name: 'Toastmasters club training', link: '/course-details/19' },
        { id: 9, name: 'Visa Interview', link: '/contact-us' },
        { id: 10, name: 'French', link: '/course-details/18'}
    

        ];

     const [searchTerm, setSearchTerm] = useState('');

     const filteredProducts = products.filter((product) =>
         product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

     // Handle form submission (search)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally handle search functionality, maybe redirect or other logic
  };

      return (
    <div className={`edu-search-popup ${isSearchOpen ? 'open' : ''}`}>
      <div className="content-wrap">
        <div className="site-logo">
                <img className="logo-light" src='/assets/images/santhosh/speaksure.png' alt="logo" />
                <img className="logo-dark" src='/assets/images/santhosh/speaksure.png' alt="logo" />
        </div>
        <div className="close-button" onClick={() => setIsSearchOpen(false)}>
          <button className="close-trigger">
            <i className="icon-73"></i>
          </button>
        </div>
        <div className="inner">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="edublink-search-popup-field"
              placeholder="Search Here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
            />
            <button type="submit" className="submit-button">
              <i className="icon-2"></i>
            </button>
          </form>
          
          {/* Display filtered product list if there are matches */}
          {searchTerm && filteredProducts.length > 0 && (
            <div className="product-list">
              <ul>
                {filteredProducts.map((product) => (
                  <li key={product.id}>
                    <Link href={product.link}>
                      <a>{product.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Optionally display a message if no results are found */}
          {searchTerm && filteredProducts.length === 0 && (
            <div className="no-results">
              <p>No results found for "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;












