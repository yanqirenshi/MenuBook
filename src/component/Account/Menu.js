import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Beach from '@yanqirenshi/beach';

import Head from './Menu/Head.js';
import Foot from './Menu/Foot.js';
import Item from './Menu/Item.js';
// import Tabs from './Menu/Tabs.js';
import Pages from '../Account/Pages.js';

const u = new Beach();

export default function Menu (props) {
    const menu = props.menu || [];
    const actions = props.actions;
    const is_opend = props.is_opend;
    const selected_item = props.selected_item;

    const selected_page_num = menu.pages.findIndex(page=> page.label===menu.current_page);
    const selected_page = menu.pages[selected_page_num];

    const change = actions.menu.change;

    const enterd = ()=> change(u.catom(menu, (new_menu)=> {
        new_menu.menu.enterd = true;
    }));

    const leaved = ()=> change(u.catom(menu, (new_menu)=> {
        new_menu.menu.enterd = false;
    }));

    const onClick = (item)=> actions.menu.item.click(item);

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

          <Paper sx={sx()}>
            <Head/>

            <Pages menu={menu}
                   is_opend={is_opend}
                   actions={actions}
                   onChange={onChangeIsOpend}
                   onClick={onClickPage}
                   onClickItem={onClick}/>

            <Box sx={sx().body}>
              {selected_page.items.map((item,i)=> {
                  return (
                      <Box key={item.url} sx={{mt:0.3,mb: 0.3}}>
                        <Item key={i}
                              data={item}
                              selected={item.code===selected_item.code}
                              onClick={onClick}/>
                      </Box>
                  );
              })}
            </Box>

            <Foot/>
          </Paper>
        </Box>
    );
}

function sx () {
    return {
        position: 'fixed',
        top: 8,
        left: 8,
        background: 'rgba(8, 156, 163, 1.0)',
        // height: '100vh',
        zIndex: 8888887,
        display: 'flex',
        flexDirection: 'column',
        body: {
            maxWidth: 55,
            minWidth: 55,
            padding: '5px 5px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
        },
    };
}
