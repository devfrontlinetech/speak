import React from 'react';
// import { Footer, Header } from '../../layout';

import ModuleOne from './module-one';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
               
                <ModuleOne />
                
            </div>
        </div>
    )
}

export default index;