import * as React from 'react';

import Box from '@mui/material/Box';

export default function Head (props) {
    const sx = {
        aspectRatio: '1 / 1',
        boxSizing: 'border-box',
        borderBottom: '1px solid #bbb',
        padding: '11px 22px',
    };

    return (
        <Box sx={sx}>
        </Box>
    );
}
