import * as React from 'react';
import Box from '@mui/material/Box';
import AvatarIcon from '@mui/material/Avatar';

import {
    MENU_TOP,
    MENU_LEFT,
    MENU_WIDTH,
    HEAD_BORDER_BOTTOM,
} from './layout.js';

export default function Avater (props) {
    const menu = props.menu;
    const changeMenu = props.changeMenu;
    const icon = props.icon;

    const click = ()=> changeMenu((new_menu)=> {
        new_menu.avater.clicked = !new_menu.avater.clicked;

        if (new_menu.avater.clicked)
            return;

        new_menu.avater.enterd = false;
        new_menu.menu.enterd = false;
    });

    // ここで menu.enterd は立てない。
    // 立てると、メニュー本体に入らずに外へ出たとき、それを戻すイベントが起きず、
    // メニューが閉じなくなる。
    // アバターからメニュー本体へ移るときは、アバターから出た更新と、
    // メニューに入った更新が続けて起きるので、メニューは開いたままになる。
    const enterd = ()=> changeMenu((new_menu)=> {
        new_menu.avater.enterd = true;
    });

    const leaved = ()=> changeMenu((new_menu)=> {
        new_menu.avater.enterd = false;
    });

    // 外側の枠は、メニューの上端の枠(Head)と同じ位置・大きさにして、
    // アバターを flex でその中央に寄せる。
    // メニューが閉じているときも、同じ位置に表示される。
    return (
        <Box sx={sxFrame()}>
          <Box className={menu.avater.clicked ? 'pair-color1' : 'theme-color3'}
               sx={sxRing()}>

            <Box sx={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#fff',
                width: 33,
                height: 33,
                borderRadius: 33,
                boxSizing: 'border-box',
            }}>
              <AvatarIcon alt="Mobilus"
                          src={icon}
                          sx={{width:33,height:33}}
                          onClick={click}
                          onMouseEnter={enterd}
                          onMouseLeave={leaved}/>
            </Box>

          </Box>
        </Box>
    );
}

function sxFrame () {
    return {
        position: 'fixed',
        top: MENU_TOP,
        left: MENU_LEFT,
        width: MENU_WIDTH,
        // Head の下線を除いた部分の中央に寄せる。
        height: MENU_WIDTH - HEAD_BORDER_BOTTOM,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 8888888,
        // 枠そのものはマウスを受けず、下のメニューに通す。
        pointerEvents: 'none',
    };
}

function sxRing () {
    return {
        display: 'flex',
        // 白い円(33px)の周りに 4px の輪(pair-color1 / theme-color3)を出す。
        padding: 0.5,
        borderRadius: 22,
        boxSizing: 'content-box',
        pointerEvents: 'auto',
    };
}
