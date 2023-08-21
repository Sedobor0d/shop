import React from 'react';
import GoodsItem from './GoodsItem';
import { Grid } from '@mui/material';

const GoodsList = ({ goods }) => {
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