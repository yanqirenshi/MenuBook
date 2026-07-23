import * as React from 'react';
import S from '@mui/material/Typography';

export default function PageTitle (props) {
    const page = props.page;
    const onClick = props.onClick;

    return (
        <S key={page.label}
           variant="h6"
           sx={{
               display: 'flex',
               alignItems: 'center',
               gap: '6px',
               cursor: 'pointer',
               borderRadius: '4px',
               padding: '2px 4px',
               '&:hover': {
                   backgroundColor: 'rgba(0, 0, 0, 0.08)',
               },
           }}
           onClick={(e)=> onClick && onClick(page.label)}>
          {page.icon &&
           <img src={page.icon}
                alt={page.label}
                style={{width: 20, height: 20, display: 'block'}}/>}
          {page.label}
        </S>
    );
};
