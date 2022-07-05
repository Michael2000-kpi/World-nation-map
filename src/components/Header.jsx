import React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {Container} from './Container';
import  { Link } from 'react-router-dom';
import { WiDaySunny,WiMoonAltWaxingCrescent2} from "react-icons/wi";
const HeaderEl=styled.header`
box-shadow:var(--shadow);
background-color:(--color-ui-base);
`;
const WrapperEl=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2rem 0;
`;
const Title=styled(Link).attrs({
    to:'/',
})`
color:var(--colors-text);
font-size:var(--fs-sm);
text-decoration:none;
font-weight:var(--fw-bold);

`
const ModeSwitcher=styled.div`
color:var(--colors-text);
font-size:var(--fs-sm);
cursor:pointer;
text-transform:capitalize;
`;
const Header = () => {
    const [theme,setTheme]=useState('light')
    const toggleTheme=()=>setTheme(theme ==='light'?'dark':'light');
    useEffect(() =>{
        document.body.setAttribute('data-theme',theme)
    },[theme])
    return (
        <HeaderEl>
            <Container>
                <WrapperEl>
                        <Title>
                            Глобус
                        </Title>
                        <ModeSwitcher onClick={toggleTheme}>
                        {
                            theme==='light'?( <WiDaySunny size="16px"/>):(<WiMoonAltWaxingCrescent2 size="16px"/>)
                        }
                               <span style={{marginLeft:'0.75rem'}}>{theme} Theme </span>
                               
                        </ModeSwitcher>
                </WrapperEl>

            </Container>
        </HeaderEl>
    );
};

export default Header;