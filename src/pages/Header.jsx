import { ShoppingBag } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from "@mui/system";
import React, { useState } from 'react';
import MyButton from '../components/UI/MyButton';
import Basket from '../components/Basket';

const navItems = ['Главная', 'О нас', 'Контакты'];

const StyledToolbar = styled(Toolbar)`
   background-color: ${({ theme }) => theme.colors.bgNavBar};
`
const StyledTypography = styled(Typography)`
   color: ${({ theme }) => theme.colors.heading};
`

const Header = () => {

   const [isOpen, setIsOpen] = useState(false);

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

            <Box
               sx={{ mr: 5 }}
            >
               {navItems.map(item => {
                  return (
                     <MyButton key={item}>
                        {item}
                     </MyButton>
                  )
               })}
            </Box>

            <IconButton
               color='inherit'
               onClick={() => setIsOpen(true)}
            >
               <ShoppingBag />
            </IconButton>

         </StyledToolbar>
         <Basket
            isOpen={isOpen}
            closeBasket={() => setIsOpen(false)}
         />
      </AppBar>
   );
};

export default Header;