import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlist from './Pages/Userlist';

function CRUD() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/users' element={<Userlist />} />
        </Routes>
    </BrowserRouter>
  );
}

export default CRUD


// CRUD -->  Create  Read   Update   Delete