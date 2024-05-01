import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import FileUploadDialog from './components/fileUpload';

function App() {
  return (
   <div>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/home' element={<FileUploadDialog />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;