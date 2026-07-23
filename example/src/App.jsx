import * as React from 'react';

import MenuBook from '../../src/component/MenuBook.js';
import Content from './Content.jsx';
import { readmeIcon, dataIcon, componentsIcon, classesIcon, generalPageIcon, settingsPageIcon } from './icons.js';

const initialMenu = {
    avater: { clicked: false, enterd: false },
    menu: { enterd: false },
    current_page: 'General',
    pages: [
        {
            label: 'General',
            icon: generalPageIcon,
            items: [
                { code: 'readme', url: '#/readme', label: 'README', icon: readmeIcon },
                { code: 'data', url: '#/data', label: 'DATA', icon: dataIcon },
                { code: 'components', url: '#/components', label: 'Components', icon: componentsIcon },
                { code: 'classes', url: '#/classes', label: 'Classes', icon: classesIcon },
            ],
        },
        {
            label: 'Settings',
            icon: settingsPageIcon,
            items: [
                { code: 'account', url: '#/account', label: 'Account' },
                { code: 'billing', url: '#/billing', label: 'Billing' },
                { code: 'security', url: '#/security', label: 'Security' },
            ],
        },
    ],
};

export default function App () {
    const [menu, setMenu] = React.useState(initialMenu);
    const [isOpend, setIsOpend] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState('readme');

    const actions = {
        menu: {
            change: setMenu,
            open: ()=> setIsOpend(true),
            close: ()=> setIsOpend(false),
            item: {
                click: (item)=> setSelectedItem(item.code),
            },
        },
    };

    return (
        <div style={{fontFamily: 'sans-serif', padding: '24px 24px 24px 96px'}}>
          <h1>MenuBook Demo</h1>
          <p>左上のアバターアイコンをクリックまたはホバーすると、サイドメニューが開きます。</p>
          <p>Current page: <b>{menu.current_page}</b></p>
          <p>Selected item: <b>{selectedItem}</b></p>

          <Content code={selectedItem}/>

          <MenuBook menu={menu}
                    actions={actions}
                    is_opend={isOpend}
                    selected_item={selectedItem}
                    theme_color={{r: 63, g: 81, b: 181}}/>
        </div>
    );
}
