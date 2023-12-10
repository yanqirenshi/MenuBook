import * as React from 'react';
import Avatar from './Account/Avater.js';
import Menu from './Account/Menu.js';

export default function Account (props) {
    const menu = props.menu;
    const actions = props.actions;
    const selected_item_code = props.selected_item;

    const selected_item = selectedItem(menu, selected_item_code);

    return (
        <>
          <Avatar menu={menu} actions={actions}/>

          {isOpenMenu(menu) &&
           <Menu menu={menu}
                 selected_item={selected_item}
                 actions={actions}/>}
        </>
    );
}

function isOpenMenu (menu) {
    return menu.avater.clicked
        || menu.avater.enterd
        || menu.menu.enterd;
}

function selectedItem (menu, selected_item_code) {
    for (const page of menu.pages)
        for (const item of page.items)
            if (item.code===selected_item_code)
                return item;

    // デフォルトかえさないと。
    return null;
}
