import * as React from 'react';
import Box from '@mui/material/Box';
import S from '@mui/material/Typography';

import PageTitle from './PageTitle.js';
import Item from './Item.js';

export default function Pages (props) {
    const menu = props.menu;
    const is_opend = props.is_opend;
    const onChange = props.onChange;
    const onClick = props.onClick;
    const onClickItem = props.onClickItem;

    const is_in_upper_half = props.is_in_upper_half;

    if (!is_opend)
        return null;

    return (
        <Box sx={{
            position: 'absolute',
            width: 'fit-content',
            padding: '8px 8px',
            borderRadius: '4px',
            boxShadow: 'var(--border-gray) 0 1px 3px 0',
            top: 'calc(100% - 34px)',
            left: '66px',
            background: '#ffffff',
            boxShadow: '0px 0px 11px #888',
            display:'flex',
        }}>
          {menu.pages.map(page=> {
              return (
                  <Box sx={{p:0.5, pl: 2, pr: 2}}>
                    <PageTitle key={page.label}
                               page={page}
                               onClick={onClick}/>

                    <Box sx={{mt:1}}>
                      {page.items.map(item=> {
                          return (
                              <Item key={item.label}
                                    item={item}
                                    onClick={()=> onClickItem(item)}/>
                          );
                      })}
                    </Box>
                  </Box>
              );
          })}
        </Box>
    );
};
