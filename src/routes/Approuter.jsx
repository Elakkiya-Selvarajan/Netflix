import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Pages from '../pages/public/Landingpage/Pages'
import Signin from '../pages/auth/Login/Signin'
import Signpass from '../pages/auth/Logout/Signpass'
import Step0 from '../pages/auth/Step0/Step0'
import netimage from '../assests/Netflix-Logo.wine.svg'
import Step5 from '../pages/auth/Step5/Step5'
import Home from '../pages/portal/Home/Home'

const Approuter = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages/>}></Route>
        </Routes>

        <Routes>
        <Route path='/Signin' element={<Signin/>}></Route>
        </Routes>

        <Routes>
          <Route path='/Signpass' element={<Signpass/>}></Route>
        </Routes>

        <Routes>
          <Route path='/Step0' element={<Step0 netfl={netimage}/>}></Route>
        </Routes>

        <Routes>
          <Route path='/Step5' element={<Step5 netfl={netimage}/>}></Route>
        </Routes>

        <Routes>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>



        
      </BrowserRouter>
    </div>
  )
}

export default Approuter;
