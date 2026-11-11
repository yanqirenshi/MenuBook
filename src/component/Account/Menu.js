import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { MENU_TOP, MENU_LEFT, MENU_WIDTH, MENU_PADDING_X } from './layout.js';

import Head from './Menu/Head.js';
import Foot from './Menu/Foot.js';
import Item from './Menu/Item.js';
// import Tabs from './Menu/Tabs.js';
import Pages from '../Account/Pages.js';

export default function Menu (props) {
    const menu = props.menu || [];
    const actions = props.actions;
    const is_opend = props.is_opend;
    const selected_item = props.selected_item;
    const theme_color = props.theme_color;

    const selected_page_num = menu.pages.findIndex(page=> page.label===menu.current_page);
    const selected_page = menu.pages[selected_page_num];

    const changeMenu = props.changeMenu;

    const enterd = ()=> changeMenu((new_menu)=> {
        new_menu.menu.enterd = true;
    });

    const leaved = ()=> changeMenu((new_menu)=> {
        new_menu.menu.enterd = false;
    });

    const onClick = (item)=> {
        if (is_opend)
            actions.menu.close();

        actions.menu.item.click(item);
    };

    const onChangeIsOpend = (val)=> {
        val ? actions.menu.open() : actions.menu.close();
    };

    const onClickPage = (v)=> {
        if (menu.current_page===v)
            return ;

        actions.menu.close();

        const new_menu = {...menu};
        new_menu.current_page = v;
        actions.menu.change(new_menu);
    };

    return (
        <Box onMouseEnter={enterd}
             onMouseLeave={leaved}>

          <Paper sx={sx(theme_color)}>
            <Head/>

            <Pages menu={menu}
                   is_opend={is_opend}
                   actions={actions}
                   onChange={onChangeIsOpend}
                   onClick={onClickPage}
                   onClickItem={onClick}/>

            <Box sx={sx(theme_color).body}>
              {selected_page.items.map((item,i)=> {
                  return (
                      <Box key={item.url} sx={{mt:0.3,mb: 0.3}}>
                        <Item key={i}
                              data={item}
                              selected={item.code===selected_item.code}
                              onClick={onClick}
                              theme_color={theme_color}/>
                      </Box>
                  );
              })}
            </Box>

            <Foot/>
          </Paper>
        </Box>
    );
}

function sx (theme_color) {
    return {
        position: 'fixed',
        top: MENU_TOP,
        left: MENU_LEFT,
        // 利用側の box-sizing に左右されないように、幅を固定する。
        width: MENU_WIDTH,
        boxSizing: 'border-box',
        background: `rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)`,
        // height: '100vh',
        zIndex: 8888887,
        display: 'flex',
        flexDirection: 'column',
        body: {
            width: MENU_WIDTH,
            boxSizing: 'border-box',
            padding: `5px ${MENU_PADDING_X}px`,
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
        },
    };
}
