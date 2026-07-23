import * as React from 'react';
import Box from '@mui/material/Box';

export default function ToggleButton (props) {
    const children = props.children;
    const icon = props.icon;

    const is_opend = props.is_opend;
    const onChange = props.onChange;

    const sx = {
        width: 'fit-content',
        cursor: 'pointer',
        fontWeight: is_opend ? 'bold' : 'normal',
        color: is_opend ? '#333' : '#fff',
        background: is_opend ? 'rgba(255,255,255,0.6)' : 'none',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap: '6px',
        pt: icon ? 0.45 : 0.1,
        pb: icon ? 0.45 : 0.8,
    };

    return (
        <Box sx={sx}
             onClick={()=>onChange(!is_opend)}>
          {icon
            ? <img src={icon}
                   alt={String(children)}
                   style={{
                       width: 16,
                       height: 16,
                       display: 'block',
                       filter: is_opend ? 'none' : 'invert(1) brightness(1.5)',
                   }}/>
            : children}
        </Box>
    );
};
