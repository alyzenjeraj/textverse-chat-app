import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Login from './components/Login';




function App() {
  return (
    <div>
      <Router>
        {/* <AuthProvider> */}
          <Routes>
            {/* <Route path="/chats" component={Chats} /> */}
            <Route path="/" element={<Login />} />
          </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
