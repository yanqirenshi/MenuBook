import * as React from 'react';
import Box from '@mui/material/Box';

import { useElementPosition } from "./Dropdown/useElementPosition.js";

import ToggleButton from './Dropdown/ToggleButton.js';
import Items from './Dropdown/Items.js';

export default function Dropdown (props) {
    const menu = props.menu;
    const is_opend = props.is_opend;
    const onChange = props.onChange;
    const onClick = props.onClick;

    const is_in_upper_half = props.isInUpperHalf || true;

    const [is_open, setIsOpen] = React.useState(false);

    return (
        <Box sx={{
            position: 'relative',
            width: 'fit-content',
            padding: 0,
            margin: 0,
            width: '100%',
        }}>

          <ToggleButton is_opend={is_opend}
                        onChange={onChange}>
            {menu.current_page}
          </ToggleButton>

          <Items menu={menu}
                 is_opend={is_opend}
                 is_in_upper_half={is_in_upper_half}
                 onClick={onClick}/>

        </Box>
    );
};
