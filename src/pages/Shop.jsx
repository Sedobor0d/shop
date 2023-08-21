
import React, { useState } from 'react';
import Search from '../components/Search';
import GoodsList from '../components/GoodsList';
import { goods } from '../data/goods';
import { Container } from '@mui/material';

const Shop = () => {


   const [cardItems, setCardItems] = useState(goods);

   return (
      <Container
         sx={{ mt: '10px' }}
      >
         <Search />
         <GoodsList goods={cardItems} />
      </Container>
   );
};

export default Shop;