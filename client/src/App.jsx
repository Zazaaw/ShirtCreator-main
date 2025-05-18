import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Header from './components/Header1';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />

      <main className="app transition-all ease-in flex-grow">
        <Home />
        <Canvas />
        <Customizer />
      </main>

      <Footer />
    </div>
  );
}

export default App;
