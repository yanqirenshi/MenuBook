import * as React from 'react';

import Box from '@mui/material/Box';

import { MENU_WIDTH, HEAD_BORDER_BOTTOM } from '../layout.js';

// メニューの上端の正方形の枠。
// アバター(Avater.js)は、この枠の中央に重なるように置かれる。
export default function Head (props) {
    const sx = {
        width: MENU_WIDTH,
        height: MENU_WIDTH,
        boxSizing: 'border-box',
        borderBottom: `${HEAD_BORDER_BOTTOM}px solid #bbb`,
        flexShrink: 0,
    };

    return (
        <Box sx={sx}>
        </Box>
    );
}
