
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css';

import IssueCert from './Components/IssueCert';
import GetCert from './Components/GetCert';
import Header from './Components/Header';
import ViewCertficate from './Components/ViewCertficate';

function App() {

  return (
    <>
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<GetCert/>} />

      <Route path="/issue" element={<IssueCert/>} />
      <Route path="/view" element={<ViewCertficate/>} />


      </Routes>
   </Router>
    </>
  )
}

export default App
