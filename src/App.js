import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import ContactUs from './views/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<ContactUs/>} />  
        </Routes>    
      </div>
    </BrowserRouter>
  );
}

export default App;
