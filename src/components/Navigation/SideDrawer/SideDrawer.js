import React from 'react'

import styles from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const sideDrawer = () => {

    return (
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
};

export default sideDrawer;