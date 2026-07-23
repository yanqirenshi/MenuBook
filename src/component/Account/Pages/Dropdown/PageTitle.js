import * as React from 'react';
import S from '@mui/material/Typography';

export default function PageTitle (props) {
    const page = props.page;
    const onClick = props.onClick;

    return (
        <S key={page.label}
           variant="h6"
           sx={{
               cursor: 'pointer',
               borderRadius: '4px',
               padding: '2px 4px',
               '&:hover': {
                   backgroundColor: 'rgba(0, 0, 0, 0.08)',
               },
           }}
           onClick={(e)=> onClick && onClick(page.label)}>
          {page.label}
        </S>
    );
};
