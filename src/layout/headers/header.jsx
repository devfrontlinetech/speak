import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import useCartInfo from '../../hooks/use-cart-info';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import Cart from './component/cart';

  const products = [
        { id: 1, name: 'Spoken English', link: '/spoken-class' },
        { id: 2, name: 'IELTS', link: '/ielts' },
        { id: 3, name: 'CELPIP', link: '/celpip' },
        { id: 4, name: 'TOEFL', link: '/toefl' },
        { id: 5, name: 'PTE', link: '/pte' },
        { id: 6, name: 'Competitive English Training', link: '/competitive-exam' },
        { id: 7, name: 'Language Training', link: '/language-training' },
        { id: 8, name: 'Toastmasters club training', link: '/language-training' },
        { id: 9, name: 'Visa Interview', link: '/contact-us' },
        { id: 10, name: 'Study Visa', link:'/study-visa'},
    

        ];

const categories = [
    { title: 'Study Visa', link: '/study-visa'},
    { title: 'IELTS', link: '/ielts' },
    { title: 'CELPIP', link: '/celpip' },
    { title: 'TOEFL', link: '/toefl' },
    { title: 'PTE', link: '/pte' },
    { title: 'Spoken English', link: '/spoken-class' },
   
   
];

const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
    const { sticky } = useSticky();
    const { quantity } = useCartInfo();
    const wishlists = useSelector(wishlistItems);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

        // Filter products based on the search term
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <>
            <header className={`edu-header header-style-${header_style ? header_style : '1'} ${ disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth' } ${no_top_bar ? 'no-topbar' : ''}`}>
                {!no_top_bar && 
                    <div className="header-top-bar">
                        <div className="container-fluid">
                            <div className="header-top">
                                <div className="header-top-left">
                                    <HeaderTopLeft />
                                </div>
                                <div className="header-top-right">
                                    <HeaderTopRight />
                                </div>
                            </div>
                        </div>
                    </div>
                }
               <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href={'/'} legacyBehavior>
                                        <a>
                                            <img className="logo-light" src='/assets/images/santhosh/speaksure.png' alt="logo" />
                                            <img className="logo-dark" src='/assets/images/santhosh/speaksure.png' alt="logo" />
                                       </a>
                                    </Link>
                                </div>


                                    {!disable_category &&
                                    <div className="header-category">
                                        <nav className="mainmenu-nav">
                                            <ul className="mainmenu">
                                                <li className="has-droupdown">
                                                    <a href="#"><i className="icon-1"></i>Category</a>
                                                    <ul className="submenu">
                                                        {categories.map((category, i) => (
                                                            <li key={i}>
                                                                <Link href={category.link} legacyBehavior><a>{category.title}</a></Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                }
                            </div>
                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    {/* Main menu */}
                                    <MainMenu />
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="search-bar">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                                            />
                                            <button className="search-btn" type="button">
                                                <i className="icon-2"></i>
                                            </button>
                                        </div>

                                        {/* Display the search results in a dropdown */}
                                        {searchTerm && filteredProducts.length > 0 && (
                                            <div className="dropdown-results">
                                                <ul>
                                                    {filteredProducts.map((product) => (
                                                        <li key={product.id}>
                                                            <Link href={product.link} legacyBehavior>
                                                                <a>{product.name}</a>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li className="icon search-icon">
                                        <a href="#" style={{cursor:'pointer'}} onClick={() => setIsSearchOpen(true)} className="search-trigger">
                                            <i className="icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <Link href="/wishlist" legacyBehavior>
                                            <a className="wishlist">
                                                <i className="icon-22"></i>
                                                <span className="count">{wishlists?.length}</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="icon cart-icon">
                                        <Link href="/cart" legacyBehavior>
                                            <a className="cart-icon">
                                                <i className="icon-3"></i>
                                                <span className="count">{quantity}</span>
                                            </a>
                                        </Link>
                                        <Cart />
                                    </li>
                                    <li className="header-btn">
                                        <Link href="https://wa.me/919789655455?text=I%20need%20course%20details" legacyBehavior>
                                            <a className="edu-btn btn-medium">Get Details
                                                <i className="icon-4"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={() => setIsOpen(true)}>
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Popup */}
                <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
            </header>

            {/* Sidebar */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}

export default Header;

