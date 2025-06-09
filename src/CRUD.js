import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlist from './Pages/Userlist';
import CreateUser from './Pages/CreateUser';
import EditUser from './Pages/EditUser';

function CRUD() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Userlist />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/edit/:id' element={<EditUser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default CRUD


// CRUD -->  Create  Read   Update   Delete
//            POST   GET     PUT     DELETE