import * as React from 'react';
import Box from '@mui/material/Box';
import S from '@mui/material/Typography';

import Item from './Item.js';

export default function Items (props) {
    const menu = props.menu;
    const is_opend = props.is_opend;
    const onChange = props.onChange;
    const onClick = props.onClick;

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
            top: 'calc(100% - 0.5rem)',
            left: '22px',
            background: '#ffffff',
            boxShadow: '0px 0px 11px #888',
        }}>
            {menu.pages.map(item=> {
                return (
                    <Item key={item.label}
                          item={item}
                          onClick={onClick}/>
                );
            })}
        </Box>
    );
};
