import React from 'react';
import GoodsItem from './GoodsItem';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const GoodsList = () => {
   const goods = useSelector(state => state.product.product)

   return (
      <Grid
         container
         spacing={2}
      >
         {goods.map((item) => (
            <GoodsItem key={item.id} item={item} />
         ))}
      </Grid>
   );
};

export default GoodsList;