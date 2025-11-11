import { useLocation, Link } from 'react-router-dom'
import { Search, Flame } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/konsinyasi', label: 'Konsinyasi' },
  { to: '/outlet', label: 'Outlet' },
  { to: '/keanggotaan', label: 'Keanggotaan' },
  { to: '/karir', label: 'Karir' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#14532d] text-white grid place-items-center shadow-sm">
            <Flame className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-wide text-[#14532d]">Waroeng Depe</div>
            <div className="text-xs text-gray-500">Authentic Taste</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-sm font-medium transition-colors pb-2 ${
                  active ? 'text-[#14532d]' : 'text-gray-600 hover:text-[#14532d]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full transition-all ${
                    active ? 'w-full bg-[#facc15]' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <button className="p-2 rounded-xl border border-gray-200 hover:border-[#14532d] hover:text-[#14532d] transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
