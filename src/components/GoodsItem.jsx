import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import MyButton from './UI/MyButton';
import { useDispatch } from 'react-redux';
import { addProductToBasket } from './store/basketSlice';

const GoodsItem = ({ item }) => {
   const dispatch = useDispatch();

   return (
      <Grid item xs={4} ms={8}>
         <Card sx={{ maxWidth: 340 }}>

            <CardContent>
               <CardMedia
                  component="img"
                  height="140"
                  image={item.poster}
                  alt={item.name}
               />
               <Typography
                  variant='body1'
                  sx={{ fontWeight: '600' }}
               >
                  {item.name}
               </Typography>
               <Typography
                  variant='body2'
               >
                  Цена: {item.price} руб.
               </Typography>
            </CardContent>

            <CardActions>
               <MyButton
                  size="small"
                  onClick={() => dispatch(addProductToBasket({ item }))}
               >
                  Купить
               </MyButton>
            </CardActions>
         </Card>
      </Grid >
   );
};

export default GoodsItem;