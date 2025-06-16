import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ZustandAsynch from './Zustand-Asynch'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout'
import ZustandSynch from './Zustand-Synch'
// import ZustandSynch from './Zustand-Synch'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<Layout/>
<Routes>
  <Route path='/' element={<ZustandSynch/>}></Route>
  <Route path='/ZustandAsynch' element={<ZustandAsynch/>}></Route>
  <Route></Route>
</Routes>

  

    </BrowserRouter>
  

  </StrictMode>,
)
