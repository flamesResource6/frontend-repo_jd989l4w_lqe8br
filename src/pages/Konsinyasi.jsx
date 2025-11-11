export default function Konsinyasi(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-[#14532d]">Kemitraan & Konsinyasi</h1>
        <p className="mt-3 text-gray-600">Berkolaborasi untuk memperluas jangkauan rasa.</p>
      </header>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <form className="bg-white rounded-2xl shadow p-6 space-y-4">
          <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#14532d]/30" placeholder="Nama Lengkap" />
          <input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#14532d]/30" placeholder="No. Telepon" />
          <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#14532d]/30" placeholder="Pesan" />
          <button className="px-6 py-3 rounded-xl bg-[#14532d] text-white hover:bg-[#0f3d21] transition">Kirim</button>
        </form>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {[
            {icon:'🌶️', title:'Brand Kuat', desc:'Dukungan materi promosi.'},
            {icon:'🥣', title:'Resep Teruji', desc:'Rasa konsisten.'},
            {icon:'📦', title:'Supply Rapi', desc:'Bahan baku terjamin.'},
          ].map((b,i)=> (
            <div key={i} className="rounded-2xl bg-[#f5f5f0] p-6 text-center shadow">
              <div className="text-3xl">{b.icon}</div>
              <div className="mt-2 font-semibold">{b.title}</div>
              <div className="text-sm text-gray-600">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
