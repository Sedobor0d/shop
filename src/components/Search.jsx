import SearchIcon from '@mui/icons-material/Search';
import { InputBase, alpha, styled } from '@mui/material';

import React from 'react';

const SearchConteiner = styled('div')(({ theme }) => ({
   position: 'relative',
   width: '80%',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   margin: '0 auto 20px',
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
   },
}));

const Search = () => {
   return (
      <SearchConteiner>
         <SearchIconWrapper>
            <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase
            placeholder="Поиск…"
            inputProps={{ 'aria-label': 'search' }}
         />
      </SearchConteiner>
   );
};

export default Search;