import Navigation from './components/UI/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Route'; // where we are going to specify our routes
import Firebase from "firebase";
import firebaseConfig from './configs/firebaseConfig';
import './App.css';
import './components/DashBoard'

function App() {
  Firebase.initializeApp(firebaseConfig);
  return(
    <div>
      <Navigation />
      <Router>
      <Routes />
    </Router>
  </div>
  )
}

export default App;
