import React from 'react';
import { ShoppingBag } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';

import MyButton from '../components/UI/MyButton';
import { setIsOpen } from '../components/store/basketSlice';


const StyledToolbar = styled(Toolbar)`
   background-color: ${({ theme }) => theme.colors.bgNavBar};
`
const StyledTypography = styled(Typography)`
   color: ${({ theme }) => theme.colors.heading};
`

const Header = () => {

   const dispatch = useDispatch();
   const countSelectedProducts = useSelector(state => state.basket.quantity)

   const navItems = ['Главная', 'О нас', 'Контакты'];

   return (
      <AppBar position='static'>
         <StyledToolbar>

            <StyledTypography
               variant='h6'
               component='span'
               sx={{ flexGrow: 1, cursor: 'pointer' }}
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
               onClick={() => dispatch(setIsOpen(true))}
            >
               <Badge
                  color='secondary'
                  badgeContent={countSelectedProducts}
               >
                  <ShoppingBag />
               </Badge>
            </IconButton>

         </StyledToolbar>
      </AppBar>
   );
};

export default Header;