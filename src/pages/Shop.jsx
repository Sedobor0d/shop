import React from 'react';
import { Container } from '@mui/material';

import Basket from '../components/Basket';
import Search from '../components/Search';
import GoodsList from '../components/GoodsList';

const Shop = () => {

   return (
      <Container
         sx={{ mt: '10px' }}
      >
         <Search />
         <GoodsList />
         <Basket />
      </Container>
   );
};

export default Shop;