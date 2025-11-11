import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SiteLayout({ children }){
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>{children}</main>
      <div id="footer"><Footer /></div>
    </div>
  )
}
