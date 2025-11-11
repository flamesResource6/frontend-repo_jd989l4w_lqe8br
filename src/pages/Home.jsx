import { Link } from 'react-router-dom'

const dishes = [
  { name: 'Soto Kudus', price: '28K', img: '', desc: 'Kuah bening rempah khas Kudus' },
  { name: 'Nasi Semarang', price: '32K', img: '', desc: 'Lauk komplet cita rasa Jawa' },
  { name: 'Indomie Goreng Special', price: '22K', img: '', desc: 'Dengan telur mata sapi & cabe rawit' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow leading-tight">Authentic Taste. <br/> Made from Heart.</h1>
          <p className="mt-4 text-lg max-w-xl drop-shadow">Cita rasa autentik dalam suasana minimalis dan hangat.</p>
          <div className="mt-8 flex gap-4">
            <Link to="/menu" className="px-6 py-3 rounded-xl bg-[#14532d] hover:bg-[#0f3d21] transition shadow">Lihat Menu</Link>
            <a href="#footer" className="px-6 py-3 rounded-xl border-2 border-[#facc15] text-[#facc15] hover:bg-[#facc15] hover:text-black transition">Temukan Kami</a>
          </div>
        </div>
      </section>

      {/* Cerita */}
      <section className="bg-[#f5f5f0] relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage:"radial-gradient(circle at 20% 20%, #dc2626 1px, transparent 1px), radial-gradient(circle at 80% 40%, #14532d 1px, transparent 1px)", backgroundSize:'120px 120px'}} />
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#14532d]">Filosofi Waroeng Depe</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">Kami menyajikan masakan Indonesia rumahan dengan sentuhan modern. Setiap hidangan dibuat dari hati, menggunakan bahan segar pilihan, dalam ruang yang bersih dan mengundang.</p>
          </div>
          <div className="rounded-2xl bg-[#f3f4f6] h-56 md:h-auto grid place-items-center text-4xl">🍜</div>
        </div>
      </section>

      {/* Hidangan Khas */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-[#14532d] mb-8">Hidangan Khas</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {dishes.map((d, i) => (
            <div key={i} className="group rounded-2xl bg-white shadow hover:shadow-lg transition transform hover:-translate-y-2 overflow-hidden">
              <div className="h-44 bg-[#f5f5f0] grid place-items-center text-4xl">🌶️</div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-lg">{d.name}</div>
                  <div className="text-[#14532d] font-bold">{d.price}</div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{d.desc}</p>
                <button className="mt-4 text-sm text-[#14532d] hover:underline">Lihat Detail</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
