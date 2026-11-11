import * as React from 'react';
import Beach from '@yanqirenshi/beach';

import Avatar from './Account/Avater.js';
import Menu from './Account/Menu.js';

const u = new Beach();

export default function MenuBook (props) {
    const menu = props.menu;
    const actions = props.actions;
    const is_opend = props.is_opend;
    const selected_item_code = props.selected_item;
    const icon = props.icon;
    const theme_color = props.theme_color || {r:157, g:91, b:139};

    const selected_item = selectedItem(menu, selected_item_code);

    const changeMenu = useMenuChanger(menu, actions.menu.change);

    return (
        <>
          <Avatar menu={menu}
                  changeMenu={changeMenu}
                  icon={icon}/>

          {isOpenMenu(menu) &&
           <Menu menu={menu}
                 is_opend={is_opend}
                 selected_item={selected_item}
                 actions={actions}
                 changeMenu={changeMenu}
                 theme_color={theme_color}/>}
        </>
    );
}

// menu を書き換えて、actions.menu.change に通知する関数を返す。
//
// アバターから出てメニューに入るときのように、1 回のマウスの移動で
// 複数の更新が続けて起きることがある。
// 描画時点の menu を元に更新を作ると、後の更新が前の更新を上書きしてしまう。
// (アバターのホバーが外れたことが消え、メニューが閉じなくなる)
// そのため、最後に通知した menu を ref に持ち、次の更新はそれを元に作る。
function useMenuChanger (menu, change) {
    const latest = React.useRef(menu);

    // 描画のたびに、利用側から渡された最新の menu に合わせる。
    latest.current = menu;

    return (fn)=> {
        const new_menu = u.catom(latest.current, fn);

        latest.current = new_menu;

        change(new_menu);
    };
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
