import { useState } from 'react';
import './App.scss';
import Footer from './ui/Footer';
import Header from './ui/Header';
import Main from './ui/Main';


function App() {
  const [darkMode,setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark__mode':''}`}>
      <Header 
        setDarkMode={ setDarkMode }
        darkMode={ darkMode }
      />
      <Main />
      <Footer />
    </div>
  )
}

export default App
