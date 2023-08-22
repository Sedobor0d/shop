import { ShoppingBag } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({ isOpen, closeBasket, selectedProducts, removeItem }) => {
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

            <Divider />

            {selectedProducts.length ? (
               <>
                  {selectedProducts.map(item => (
                     <BasketItem key={item.id} {...item} removeItem={removeItem} />
                  ))}
                  <Divider />
                  <ListItem>
                     <Typography
                        variant='h6'
                        component='span'
                     >
                        Общая стоимость {selectedProducts.reduce((acc, item) => (
                           acc + item.price
                        ), 0)} руб.
                     </Typography>
                  </ListItem>
               </>
            ) : (
               <ListItem>
                  Корзина пуста
               </ListItem>
            )}
         </List>
      </Drawer>
   );
};

export default Basket;