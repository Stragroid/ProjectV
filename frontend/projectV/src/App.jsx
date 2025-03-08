import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import AuthenticatedRoute from './component/AuthenticationRoute';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Route path="/login" element={<AuthenticatedRoute><Login /></AuthenticatedRoute>} />
      </div>
    </>
  )
}

export default App
