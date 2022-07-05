import  React from 'react';
import styled from 'styled-components';

import Select from 'react-select';
export const CustomSelect =styled(Select).attrs({
    styles:{
        control: (provided)=>({...provided,
        backgroundColor:'var(--colors-ui-base)',
        color:'var(--colors-text)',
        borderRadius:'var(--radii)',
        padding:'0.25rem',
        border:'none',
        height:'50px',
        boxShadows:'var(--shadow)'
        }),
        option:(provided,state)=>({
            ...provided,
            cursor:'pointer',
            color:'var(color-text)',
            backgroundColor:state.isSelected?'var(--color-bg)':'var(--color-ui-base)',
        }),
    },
})`
width:200px;
border-radius:var(--radii);
font-family:var(--family);
border:none;
&>*{
    box-shadow:var(--shadow);
}
&*{
    color:var(--colors-text)!important;
}
& input{
    padding-top:0.25rem;
}
&>div[id]{
background-color:var(--color-ui-base);
}
`;