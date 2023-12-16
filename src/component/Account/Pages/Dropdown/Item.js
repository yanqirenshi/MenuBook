import * as React from 'react';
import S from '@mui/material/Typography';

export default function Item (props) {
    const item = props.item;
    const onClick = props.onClick;

    return (
        <S key={item.label}
           onClick={(e)=> onClick && onClick(item.label)}>
          {item.label}
        </S>
    );
};
