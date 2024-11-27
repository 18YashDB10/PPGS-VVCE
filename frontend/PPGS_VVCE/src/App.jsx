import LandingHome from "./Pages/Landing Page/LandingHome"
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingHome />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
