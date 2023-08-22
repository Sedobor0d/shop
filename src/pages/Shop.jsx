
import React, { useState } from 'react';
import Search from '../components/Search';
import GoodsList from '../components/GoodsList';
import { goods } from '../data/goods';
import { Container } from '@mui/material';
import Basket from '../components/Basket';

const Shop = ({ isOpen, setIsOpen }) => {

   const [cardItems, setCardItems] = useState(goods);
   const [textInput, setTextInput] = useState('');
   const [selectedProducts, setSelectedProducts] = useState([])

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

   const addItem = (item) => {
      let findItem = selectedProducts.find(value => value.id === item.id)

      if (findItem) {
         return
      }
      const newItem = [
         ...selectedProducts,
         item
      ]

      setSelectedProducts(newItem)
   }

   const removeItem = (id) => {
      setSelectedProducts(selectedProducts.filter(item => item.id !== id))
   }

   return (
      <Container
         sx={{ mt: '10px' }}
      >
         <Search
            textInput={textInput}
            change={handleChangeInput}
         />
         <GoodsList
            goods={cardItems}
            addItem={addItem}
         />
         <Basket
            isOpen={isOpen}
            closeBasket={() => setIsOpen(false)}
            selectedProducts={selectedProducts}
            removeItem={removeItem}
         />
      </Container>
   );
};

export default Shop;