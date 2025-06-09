import { Routes, Route } from 'react-router-dom';

import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import LoginAdmin from './pages/LoginAdmin';
import SignUp from './pages/SignUp';
import Header from './components/Header1';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="app transition-all ease-in flex-grow">
        <Routes>
          <Route path="/" element={<><Home /><Canvas /><Customizer /></>} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
