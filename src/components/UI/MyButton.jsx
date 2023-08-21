import { Button, styled } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)`
   color: ${({ theme }) => theme.colors.darkBlue};
   &:hover {
      background-color: ${({ theme }) => theme.colors.darkBlue};
      color: ${({ theme }) => theme.colors.lightBlue};
   };
`

const MyButton = ({ children, ...props }) => {
   return (
      <StyledButton
         {...props}
         sx={{ padding: '5px 10px 5px' }}
      >
         {children}
      </StyledButton>
   );
};

export default MyButton;