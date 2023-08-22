import { Close } from '@mui/icons-material';
import { IconButton, ListItem, Typography } from '@mui/material';
import React from 'react';

const BasketItem = ({ name, price, id, removeItem }) => {
   return (
      <ListItem>
         <Typography
            variant='body1'
         >
            {name} {price} руб.
         </Typography>
         <IconButton
            onClick={() => removeItem(id)}
         >
            <Close />
         </IconButton>
      </ListItem>
   );
};

export default BasketItem;