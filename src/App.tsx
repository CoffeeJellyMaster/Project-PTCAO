import { useEffect } from 'react';
import './App.css'
import { app } from './firebase';

function App() {
  useEffect(() => {
    console.log('Firebase initialized:', app.name);
  }, []);
  return (
    <div className="background-image">
      {/* Background only */}
    </div>
  )
}

export default App
