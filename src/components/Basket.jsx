import { ShoppingBag } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from './store/basketSlice';

const Basket = () => {

   const dispatch = useDispatch();
   const { selectedProducts, isOpen } = useSelector(state => ({
      selectedProducts: state.basket.selectedProducts,
      isOpen: state.basket.isOpen,
   }));

   return (
      <Drawer
         anchor='right'
         open={isOpen}
         onClose={() => dispatch(setIsOpen(false))}
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
                     <BasketItem key={item.id} {...item} />
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