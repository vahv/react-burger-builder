import React from 'react';

import styles from './Toolbar.module.css';

const toolbar = (props) =>(
    <header className={styles.Toolbar}>
        <div>Menu</div>
        <div>Logo</div>
        <nav>
            ...
        </nav>
    </header>
);

 
export default toolbar;