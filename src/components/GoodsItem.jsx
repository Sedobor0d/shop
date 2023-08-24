import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import MyButton from './UI/MyButton';
import { useDispatch } from 'react-redux';
import { addProductToBasket } from './store/basketSlice';

const GoodsItem = ({ item }) => {
   const dispatch = useDispatch();

   return (
      <Grid item xs={4} ms={8}>
         <Card sx={{
            width: '340px',
            height: '290px',
            position: 'relative',
         }}>

            <CardContent>
               <CardMedia
                  component="img"
                  height="130"
                  image={item.images[0]}
                  alt={item.title}
               />
               <Typography
                  variant='body1'
                  sx={{ fontWeight: '600', marginTop: '10px' }}
               >
                  {item.title}
               </Typography>
               <Typography
                  variant='body2'
               >
                  Цена: {item.price} руб.
               </Typography>
            </CardContent>

            <CardActions
               sx={{ position: 'absolute', bottom: '0' }}
            >
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