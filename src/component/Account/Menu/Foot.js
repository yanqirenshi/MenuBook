import * as React from 'react';

import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Foot (props) {
    return (
        <Box sx={{
            borderTop: '1px solid #eee',
            pt: 1,
            pb: 1,
            paddingLeft: '5px',
            paddingRight: '5px',
        }}>
          <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'rgba(255,255,255, 0.2)'
          }}>
            <LogoutIcon/>
          </Box>
        </Box>
    );
}
