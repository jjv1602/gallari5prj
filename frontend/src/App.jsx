import { Suspense, useState } from 'react'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import './App.css'
import Loader from './Components/Loader/Loader';
import Login from './Components/StartPg/Login/Login';
import Register from './Components/StartPg/Register/Register';
import { ChakraProvider } from '@chakra-ui/react'
import DesignPg from './Components/DesignPg/DesignPg';

function App() {

  return (
    <>
    <ChakraProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/design" element={<DesignPg/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
