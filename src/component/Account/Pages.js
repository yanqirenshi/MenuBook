import * as React from 'react';
import Box from '@mui/material/Box';

import Dropdown from './Pages/Dropdown.js';

export default function Pages (props) {
    const menu = props.menu;
    const is_opend = props.is_opend;
    const onChange = props.onChange;
    const onClick = props.onClick;
    const onClickItem = props.onClickItem;

    const sx = {
        borderBottom: '1px solid #bbb',
        padding: '0px 0px',
        width: '100%',
    };

    return (
        <Box sx={sx}>
          <Dropdown menu={menu}
                    is_opend={is_opend}
                    onChange={onChange}
                    onClick={onClick}
                    onClickItem={onClickItem}/>
        </Box>
    );
};
