import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlist from './Pages/Userlist';
import CreateUser from './Pages/CreateUser';

function CRUD() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/users' element={<Userlist />} />
            <Route path='/create' element={<CreateUser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default CRUD


// CRUD -->  Create  Read   Update   Delete
//            POST   GET     PUT     DELETE