import * as React from 'react';
import Box from '@mui/material/Box';
import AvatarIcon from '@mui/material/Avatar';

import * as u from '../../../../libs/yutils/index.js';

export default function Avater (props) {
    const menu = props.menu;
    const actions = props.actions;

    const change = actions.menu.change;

    const click = ()=> change(u.catom(menu, (new_menu)=> {
        new_menu.avater.clicked = !new_menu.avater.clicked;

        if (new_menu.avater.clicked)
            return;

        new_menu.avater.enterd = false;
        new_menu.menu.enterd = false;
    }));

    const enterd = ()=> change(u.catom(menu, (new_menu)=> {
        new_menu.avater.enterd = true;
        new_menu.menu.enterd = true;
    }));

    const leaved = ()=> change(u.catom(menu, (new_menu)=> {
        new_menu.avater.enterd = false;
    }));

    return (
        <Box className={menu.avater.clicked ? 'pair-color1' : 'theme-color3'}
             sx={sx(menu)}>

          <Box sx={{
              display:'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#fff',
              width: 22,
              height: 22,
              borderRadius: 22,
          }}>
            <AvatarIcon alt="Mobilus"
                        src={`${process.env.PUBLIC_URL}/Logo.svg`}
                        sx={{width:22,height:22}}
                        onClick={click}
                        onMouseEnter={enterd}
                        onMouseLeave={leaved}/>
          </Box>

        </Box>
    );
}

function sx (menu) {
    return {
        position: 'fixed',
        top: 20,
        left: 20,
        padding: 0.5,
        borderRadius: 22,
        zIndex: 8888888,
        boxSizing: 'border-box',
    };
}
