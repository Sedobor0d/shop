import { ShoppingBag } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from "@mui/system";
import React from 'react';

const navItems = ['Главная', 'О нас', 'Контакты'];

const StyledToolbar = styled(Toolbar)`
   background-color: ${({ theme }) => theme.colors.bgNavBar};
`
const StyledTypography = styled(Typography)`
   color: ${({ theme }) => theme.colors.heading};
`

const StyledButton = styled(Button)`
   color: ${({ theme }) => theme.colors.textNav};
   &:hover {
      background-color: ${({ theme }) => theme.colors.hoverbgNav};
      color: ${({ theme }) => theme.colors.hoverTextNav};
   };
`

const Header = () => {
   return (
      <AppBar position='static'>
         <StyledToolbar>
            <StyledTypography
               variant='h6'
               component='span'
               sx={{ flexGrow: 1 }}
            >
               My Shop
            </StyledTypography>
            <Box>
               <StyledButton >
                  Домашняя
               </StyledButton>
               <StyledButton >
                  О нас
               </StyledButton>
               <StyledButton >
                  Контакты
               </StyledButton>
            </Box>
            <IconButton
               color='inherit'
            >
               <ShoppingBag />
            </IconButton>
         </StyledToolbar>
      </AppBar>
   );
};

export default Header;