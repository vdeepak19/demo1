import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter basename="demo1">
<Routes>
  <Route path="/" element = {<App/>}></Route>
  <Route path='/page1' element={<Page1/>}/>
  <Route path='/page2' element={<Page2/>}/>
</Routes>
</BrowserRouter>
)
