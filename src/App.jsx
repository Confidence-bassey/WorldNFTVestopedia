
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import Homepage from './Components/Homepage'
import ProjectList from './Components/ProjectList'
import ProjectDetails from './Components/ProjectDetails'
import Footer from './Components/Footer'
// import Login from './Components/Login'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<LandingPage />}></Route>
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/projectlist' element={<ProjectList />}></Route>
          <Route path='/projectdetails/:id' element={<ProjectDetails />} />
          <Route path='/footer' element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </>
  )
}

export default App
