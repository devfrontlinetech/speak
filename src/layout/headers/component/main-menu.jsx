import React from 'react';
import menu_data from '../menu-data';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => (
                <li key={i} className="has-droupdown">
                    {/* Check if the menu item is Home, Gallery, Blog, Lms, or Contact, render as a simple link */}
                    {menu.title === 'Home' || menu.title === 'Gallery' || menu.title === 'Blog' || menu.title === 'LMS' || menu.title === 'Contact' ? (
                        <Link href={menu.link}>
                            <a>{menu.title}</a>
                        </Link>
                    ) : menu.title === 'Courses' ? (
                        // Handle the "Courses" item separately to navigate to /web-dev
                        <Link href="/our-course">
                            <a>{menu.title}</a>
                        </Link>
                    ) : (
                        <a>{menu.title}</a>
                    )}

                    {/* Render submenu only if the menu is not Home, Gallery, Blog, Lms, or Contact and has submenus */}
                    {!menu.mega_menu && menu.submenus?.length > 0 && (menu.title !== 'Home' && menu.title !== 'Gallery' && menu.title !== 'Blog' && menu.title !== 'LMS' && menu.title !== 'Contact') && (
                        <ul className="submenu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <Link href={nav.link}>
                                        <a>
                                            {nav.title}
                                            {nav?.hot && <span className="badge-1">hot</span>}
                                            {nav?.new && <span className="badge">new</span>}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Render mega-menu only if the menu is not Home, Gallery, Blog, Lms, or Contact and has submenus */}
                    {menu.mega_menu && menu.submenus?.length > 0 && (menu.title !== 'Home' && menu.title !== 'Gallery' && menu.title !== 'Blog' && menu.title !== 'LMS' && menu.title !== 'Contact') && (
                        <ul className="mega-menu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <h6 className="menu-title">{nav.title}</h6>
                                    <ul className="submenu mega-sub-menu-01">
                                        {nav.mega_submenu.map((m, i) => (
                                            <li key={i}>
                                                <Link href={m.link}>
                                                    <a>{m.title}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MainMenu;










// import React from 'react';
// import menu_data from '../menu-data';
// import Link from 'next/link';

// const MainMenu = () => {
//     return (
//         <ul className="mainmenu">
//             {menu_data.map((menu, i) => (
//                 <li key={i} className="has-droupdown">
                  
//                     {menu.title === 'Home' || 'Gallery' || 'LMS' ? (
//                         <Link href={menu.link} legacyBehavior>
//                             <a>{menu.title}</a>
//                         </Link>
//                     ) : (
//                         <a>{menu.title}</a>
//                     )}

                    

                    
//                     {!menu.mega_menu && menu.submenus?.length > 0 && menu.title !== 'Home'  && (
//                         <ul className="submenu">
//                             {menu.submenus.map((nav, i) => (
//                                 <li key={i}>
//                                     <Link href={nav.link} legacyBehavior>
//                                         <a>
//                                             {nav.title}
//                                             {nav?.hot && <span className="badge-1">hot</span>}
//                                             {nav?.new && <span className="badge">new</span>}
//                                         </a>
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}

                   
//                     {menu.mega_menu && menu.submenus?.length > 0 && menu.title !== 'Home'  && (
//                         <ul className="mega-menu">
//                             {menu.submenus.map((nav, i) => (
//                                 <li key={i}>
//                                     <h6 className="menu-title">{nav.title}</h6>
//                                     <ul className="submenu mega-sub-menu-01">
//                                         {nav.mega_submenu.map((m, i) => (
//                                             <li key={i}>
//                                                 <Link href={m.link} legacyBehavior>
//                                                     <a>{m.title}</a>
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default MainMenu;
