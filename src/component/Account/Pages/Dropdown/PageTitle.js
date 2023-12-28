import * as React from 'react';
import S from '@mui/material/Typography';

export default function PageTitle (props) {
    const page = props.page;
    const onClick = props.onClick;

    return (
        <S key={page.label}
           variant="h6"
           onClick={(e)=> onClick && onClick(page.label)}>
          {page.label}
        </S>
    );
};
