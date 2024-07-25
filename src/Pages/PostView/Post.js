import React from 'react';
import { Outlet } from 'react-router-dom';
import { PostContextProvider } from './postContext';


export default function  Posts() {

  return<PostContextProvider>
      <Outlet />
   </PostContextProvider> 
}



