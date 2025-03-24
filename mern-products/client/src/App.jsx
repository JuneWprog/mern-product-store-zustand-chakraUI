import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNewPage from './pages/AddNewPage';
import Navbar from './components/Navbar';
import { useColorModeValue } from '@chakra-ui/react';

function App() {


  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<AddNewPage />} />
      </Routes>
    </div>
  );
}

export default App;