import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import UserList from './components/UserList';
import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />

      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
