import * as React from 'react';
import Box from '@mui/material/Box';

export default function Item (props) {
    const item = props.data;
    const is_selected = props.selected;
    const onClick = props.onClick;
    const theme_color = props.theme_color;

    const [is_hover, setIsHover] = React.useState(false);

    const is_expanded = is_hover || is_selected;

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
              gap: (item.icon && is_expanded) ? '8px' : 0,
              borderRadius: '4px',
              padding: is_expanded ? '0px 11px 0px 11px' : 0,

              color: color(is_hover, is_selected, theme_color),
              whiteSpace: 'nowrap',
              fontWeight:'bold',
          }}>

            {item.icon &&
             <img src={item.icon}
                  alt={item.label}
                  style={{
                      width: 18,
                      height: 18,
                      display: 'block',
                      // 背景が紫(未選択)のときは白っぽく、白背景(選択中)のときは元の色に
                      filter: is_selected ? 'none' : 'invert(1) brightness(1.5)',
                  }}/>}

            {item.icon
              ? (is_expanded && item.label)
              : (is_expanded ? item.label : item.label.substring(0,1))}

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
