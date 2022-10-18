import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from 'Content/Homepage/Homepage';

const Router = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" index element={<Homepage />}></Route>
               </Routes>
          </BrowserRouter>
     );
};

export default Router;
