export default function Keanggotaan(){
  const benefits = [
    {icon:'💚', title:'Diskon Spesial', desc:'Nikmati potongan harga eksklusif.'},
    {icon:'⭐', title:'Poin Reward', desc:'Kumpulkan poin tiap transaksi.'},
    {icon:'🎉', title:'Event Eksklusif', desc:'Undangan khusus untuk member.'},
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-[#14532d]">Program Member Waroeng Depe</h1>
      </header>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {benefits.map((b,i)=> (
          <div key={i} className="rounded-2xl bg-white shadow p-6 text-center hover:shadow-lg transition">
            <div className="text-4xl">{b.icon}</div>
            <div className="mt-2 font-semibold">{b.title}</div>
            <div className="text-sm text-gray-600">{b.desc}</div>
          </div>
        ))}
      </div>

      <form className="mt-10 bg-[#f5f5f0] rounded-2xl p-6 grid md:grid-cols-2 gap-4">
        <input placeholder="Nama Lengkap" className="px-4 py-3 rounded-xl border border-gray-200" />
        <input placeholder="No. Telepon" className="px-4 py-3 rounded-xl border border-gray-200" />
        <input placeholder="Email" className="px-4 py-3 rounded-xl border border-gray-200" />
        <input placeholder="Tanggal Lahir (opsional)" className="px-4 py-3 rounded-xl border border-gray-200" />
        <div className="md:col-span-2">
          <button className="w-full px-6 py-3 rounded-xl bg-[#14532d] text-white hover:bg-[#0f3d21] transition">Daftar Sekarang</button>
        </div>
      </form>
    </div>
  )
}
