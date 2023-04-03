import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar';
// import NotFound from './components/NotFound'; 
import Home from './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;