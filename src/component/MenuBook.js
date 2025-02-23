import * as React from 'react';
import Avatar from './Account/Avater.js';
import Menu from './Account/Menu.js';

export default function MenuBook (props) {
    const menu = props.menu;
    const actions = props.actions;
    const is_opend = props.is_opend;
    const selected_item_code = props.selected_item;
    const icon = props.icon;
    const theme_color = props.theme_color || {r:157, g:91, b:139};

    const selected_item = selectedItem(menu, selected_item_code);

    return (
        <>
          <Avatar menu={menu}
                  actions={actions}
                  icon={icon}/>

          {isOpenMenu(menu) &&
           <Menu menu={menu}
                 is_opend={is_opend}
                 selected_item={selected_item}
                 actions={actions}
                 theme_color={theme_color}/>}
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
