import React from 'react';
// import { Footer, Header } from '../../layout';

import ModuleThree from './module-three';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                {/* <Header no_top_bar={true} /> */}
                <ModuleThree />
                {/* <Footer style_2={'footer-dark bg-image footer-style-2'} /> */}
            </div>
        </div>
    )
}

export default index;