import React from 'react';
import menu_data from '../menu-data';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => (
                <li key={i} className="has-droupdown">
                  
                    {menu.title === 'Home' || 'Gallery' || 'LMS' ? (
                        <Link href={menu.link} legacyBehavior>
                            <a>{menu.title}</a>
                        </Link>
                    ) : (
                        <a>{menu.title}</a>
                    )}

                    

                    
                    {!menu.mega_menu && menu.submenus?.length > 0 && menu.title !== 'Home'  && (
                        <ul className="submenu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <Link href={nav.link} legacyBehavior>
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

                   
                    {menu.mega_menu && menu.submenus?.length > 0 && menu.title !== 'Home'  && (
                        <ul className="mega-menu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <h6 className="menu-title">{nav.title}</h6>
                                    <ul className="submenu mega-sub-menu-01">
                                        {nav.mega_submenu.map((m, i) => (
                                            <li key={i}>
                                                <Link href={m.link} legacyBehavior>
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
}

export default MainMenu;
