import { Route, Routes} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

const LandingPage = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
    </div>
  )
}

export default LandingPage