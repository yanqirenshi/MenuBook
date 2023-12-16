import * as React from 'react';
import Box from '@mui/material/Box';

export default function ToggleButton (props) {
    const children = props.children;

    const is_opend = props.is_opend;
    const onChange = props.onChange;

    const sx = {
        width: 'fit-content',
        cursor: 'pointer',
        color: '#fff',
        background: 'none',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        pt:0.1,
        pb:0.8,
    };

    return (
        <Box sx={sx}
             onClick={()=>onChange(!is_opend)}>
          {children}
        </Box>
    );
};
