import { Close } from '@mui/icons-material';
import { IconButton, ListItem, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductAsync } from './store/basketSlice';

const BasketItem = ({ title, price, id }) => {
   const dispatch = useDispatch();

   return (
      <ListItem>
         <Typography
            variant='body1'
         >
            {title} {price} руб.
         </Typography>
         <IconButton
            onClick={() => dispatch(deleteProductAsync({ id }))}
         >
            <Close />
         </IconButton>
      </ListItem >
   );
};

export default BasketItem;