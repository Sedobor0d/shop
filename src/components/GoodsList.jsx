import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import GoodsItem from './GoodsItem';
import { fetchProducts } from './store/filterProductSlice';

const GoodsList = () => {
   const dispatch = useDispatch();
   const { filterProducts, status, error } = useSelector(state => state.product)

   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   return (
      <Grid
         container
         spacing={2}
      >
         {status === 'pending'
            ? (
               <Typography
                  variant='h5'
                  sx={{ margin: '10% auto' }}
               >
                  Loading
               </Typography>
            ) : (
               filterProducts.map((item) => (
                  <GoodsItem key={item.id} item={item} />
               ))
            )
         }

         {error &&
            <Typography
               variant='h5'
               sx={{ margin: '10% auto' }}
            >
               Error: {error}
            </Typography>}
      </Grid >
   );
};

export default GoodsList;