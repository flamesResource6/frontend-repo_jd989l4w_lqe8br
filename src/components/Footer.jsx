import { Instagram, Facebook, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#f5f5f0] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-2xl font-extrabold text-[#14532d]">Waroeng Depe</div>
          <p className="mt-3 text-gray-600">Minimalisme modern bertemu kehangatan Indonesia.</p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="p-2 rounded-lg bg-white shadow hover:shadow-md transition"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="p-2 rounded-lg bg-white shadow hover:shadow-md transition"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="p-2 rounded-lg bg-white shadow hover:shadow-md transition"><Mail className="w-5 h-5"/></a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-gray-900 mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-[#14532d]" href="/">Home</a></li>
            <li><a className="hover:text-[#14532d]" href="/menu">Menu</a></li>
            <li><a className="hover:text-[#14532d]" href="/konsinyasi">Konsinyasi</a></li>
            <li><a className="hover:text-[#14532d]" href="/outlet">Outlet</a></li>
            <li><a className="hover:text-[#14532d]" href="/keanggotaan">Keanggotaan</a></li>
            <li><a className="hover:text-[#14532d]" href="/karir">Karir</a></li>
            <li><a className="hover:text-[#14532d]" href="/kontak">Kontak</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-gray-900 mb-4">Info Kontak</div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/>Jl. Mawar No. 10, Surabaya</div>
            <div>WhatsApp: 0812-3456-7890</div>
            <div>Email: hello@waroengdepe.id</div>
          </div>
          <form className="mt-4 flex gap-2">
            <input placeholder="Email untuk newsletter" className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14532d]/30" />
            <button className="px-4 py-2 rounded-lg bg-[#14532d] text-white hover:bg-[#0f3d21] transition">Kirim</button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row items-center justify-between">
          <div>Hak Cipta © 2025 Waroeng Depe</div>
          <div>Instagram: <span className="font-semibold">@waroengdepesby</span></div>
        </div>
      </div>
    </footer>
  )
}
