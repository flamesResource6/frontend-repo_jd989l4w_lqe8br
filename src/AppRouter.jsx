import { Routes, Route } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Konsinyasi from './pages/Konsinyasi'
import Outlet from './pages/Outlet'
import Keanggotaan from './pages/Keanggotaan'
import Karir from './pages/Karir'
import Kontak from './pages/Kontak'
import Test from './Test'

export default function AppRouter(){
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/konsinyasi" element={<Konsinyasi />} />
        <Route path="/outlet" element={<Outlet />} />
        <Route path="/keanggotaan" element={<Keanggotaan />} />
        <Route path="/karir" element={<Karir />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </SiteLayout>
  )
}
