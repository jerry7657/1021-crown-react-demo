import React, { useState } from 'react';
import MenuItem_xx from '../components/MenuItem_xx'
import './Directory_xx.scss'
import items from './menu-item-data'

const Directory_xx = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div className="directory-menu">
            {menuItems.map(item => {
                const { id, name, remoteUrl, size } = item;
                return (
                    <MenuItem_xx key={id} name={name} remoteUrl={remoteUrl} size={size} />
                )
            })

            }
        </div>

    )
}

export default Directory_xx;
