import React from 'react';
import styled from 'styled-components';
import {IoSearch} from "react-icons/io5";
const InPutContainer=styled.label`
/*background-color:var(--color-ui-base);*/
padding:1rem 2rem;
display:flex;
border-radius:var(--radii);
box-shadow:var(--shadow);
width:100%;
margin:1.5rem;
@media (min-width:767px){
    margine-bottom:0;
    width:280px;
}
`;
const Input=styled.input.attrs({
    type:'search',
    placeholder:'Пошук...',
    
})
`
    margine-left:2rem;
    border:none;
    otline:none;
    color:var(--colors-text);
    
`;

export const Search = ({search,setSearch}) => {

    return (
        <InPutContainer>
            <IoSearch/>
            <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
        </InPutContainer>
    );
};

