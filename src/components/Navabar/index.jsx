import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo/logo.svg'
import lupa from '../../assets/icons/lupa.png'
//Style
import { Search,
        SearchIconWrapper,
        StyledInputBase, 
        TopBar,
        SearchIcon } from './NavBar.elements';

export default function Navbar({ filter }) {
  return (
    <TopBar sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                    component="img"
                    src={logo}
                />
            </Toolbar>
        </AppBar>
        <Search>
            <StyledInputBase
                placeholder="Digite aqui sua busca…"
                inputProps={{ 'aria-label': 'Digite aqui sua busca' }}
                onChange={(evt) => filter(evt.target.value)}
            />
            <SearchIconWrapper>
                <SearchIcon 
                component="img"
                src={lupa} />
            </SearchIconWrapper>
        </Search>
    </TopBar>
  );
}