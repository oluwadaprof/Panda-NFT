import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import CreateRoutes from './routes/CreateRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <CreateRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
