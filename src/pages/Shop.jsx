
import React, { useState } from 'react';
import Search from '../components/Search';
import GoodsList from '../components/GoodsList';
import { goods } from '../data/goods';
import { Container } from '@mui/material';

const Shop = () => {

   const [cardItems, setCardItems] = useState(goods);
   const [textInput, setTextInput] = useState('');

   const handleChangeInput = (e) => {
      if (!e.target.value) {
         setCardItems(goods);
         setTextInput('')
         return
      }

      setTextInput(e.target.value);

      setCardItems(cardItems.filter(item =>
         item.name.toLowerCase().includes(e.target.value.toLowerCase())
      ))
   }

   return (
      <Container
         sx={{ mt: '10px' }}
      >
         <Search
            textInput={textInput}
            change={handleChangeInput}
         />
         <GoodsList goods={cardItems} />
      </Container>
   );
};

export default Shop;