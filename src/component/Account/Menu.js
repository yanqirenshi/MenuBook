import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import * as u from '../../../../libs/yutils/index.js';

import Head from './Menu/Head.js';
import Foot from './Menu/Foot.js';
import Item from './Menu/Item.js';
// import Tabs from './Menu/Tabs.js';

export default function Menu (props) {
    const menu = props.menu || [];
    const actions = props.actions;
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

    return (
        <Box onMouseEnter={enterd}
             onMouseLeave={leaved}>
          <Paper sx={sx()}>
            <Head/>

            {/* <Tabs menu={menu} actions={actions}/> */}

            <Box sx={sx().body}>
              {selected_page.items.map((item,i)=> {
                  return (
                      <Box key={item.url} sx={{
                          mt:0.3,
                          mb: 0.3,
                      }}>
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
            maxWidth: 45,
            minWidth: 45,
            padding: '5px 5px',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
        },
    };
}
