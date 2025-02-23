import * as React from 'react';
import Box from '@mui/material/Box';

export default function Item (props) {
    const item = props.data;
    const is_selected = props.selected;
    const onClick = props.onClick;
    const theme_color = props.theme_color;

    const [is_hover, setIsHover] = React.useState(false);

    return (
        <Box title={item.label}
             sx={{
                 width: boxWidth(is_hover, is_selected, 33),
                 height: 33,
                 background: `rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)`,
                 padding: '4px',
                 borderRadius: '5px',
                 marginLeft: 'auto',
                 marginRight: 'auto',
             }}
             onClick={()=> onClick(item)}
             onMouseEnter={()=> setIsHover(true)}
             onMouseLeave={()=> setIsHover(false)}>


          <Box sx={{
              background: background(is_hover, is_selected, theme_color),
              width: boxWidth(is_hover, is_selected, '100%'),
              height:'100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
              padding: (is_hover || is_selected) ? '0px 11px 0px 11px' : 0,

              color: color(is_hover, is_selected, theme_color),
              whiteSpace: 'nowrap',
              fontWeight:'bold',
          }}>

            {(is_hover || is_selected) ? item.label : item.label.substring(0,1)}

          </Box>

        </Box>
    );
}

function boxWidth (is_hover, is_selected, normal) {
    return (is_hover || is_selected) ? 'fit-content' : normal;
}

function color (is_hover, is_selected, theme_color) {
    if (is_selected)
        return `rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)`;

    return '#ffffff';
}

function background (is_hover, is_selected, theme_color) {
    if (is_selected)
        return '#ffffff';

    return `rgba(${theme_color.r}, ${theme_color.g}, ${theme_color.b}, 1.0)`;
}
