import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WebSocketComponent } from './components/WebSocketComponent.jsx';
import { Map } from './components/Map';
import BusOptions from './components/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BusOptions />} />
        <Route path="/show-bus1" element={<Map busID={1} />} />
        <Route path="/show-bus2" element={<Map busID={2} />} />
        <Route path="/send-bus1" element={<WebSocketComponent busID={1} />} />
        <Route path="/send-bus2" element={<WebSocketComponent busID={2} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;