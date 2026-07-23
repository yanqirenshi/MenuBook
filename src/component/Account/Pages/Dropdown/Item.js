import * as React from 'react';
import S from '@mui/material/Typography';

export default function Item (props) {
    const item = props.item;
    const onClick = props.onClick;

    return (
        <S sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            borderRadius: '4px',
            padding: '2px 4px',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
        }}
           onClick={()=> onClick(item)}>
          {item.icon &&
           <img src={item.icon}
                alt={item.label}
                style={{width: 16, height: 16, display: 'block'}}/>}
          {item.label}
        </S>
    );
};
