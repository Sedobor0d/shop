import { ShoppingBag } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

const Basket = ({ isOpen, closeBasket }) => {
   return (
      <Drawer
         anchor='right'
         open={isOpen}
         onClose={closeBasket}
         sx={{ margin: '0 auto' }}
      >
         <List sx={{ width: '300px' }}>
            <ListItem>
               <ShoppingBag sx={{ marginRight: '20px' }} />
               <ListItemText primary='Корзина' />
            </ListItem>
         </List>
         <Divider />
      </Drawer>
   );
};

export default Basket;