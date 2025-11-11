export default function Karir(){
  const jobs = [
    {title:'Barista', location:'Surabaya', desc:'Melayani minuman dan menjaga kebersihan bar.'},
    {title:'Cook Helper', location:'Surabaya', desc:'Membantu persiapan bahan dan proses masak.'},
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-[#14532d]">Bergabung Bersama Tim Waroeng Depe</h1>
      </header>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {jobs.map((j,i)=> (
          <div key={i} className="rounded-2xl bg-white shadow p-6 hover:shadow-lg transition">
            <div className="font-semibold text-lg">{j.title}</div>
            <div className="text-sm text-gray-600">{j.location}</div>
            <p className="text-sm text-gray-700 mt-2">{j.desc}</p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-[#14532d] text-white hover:bg-[#0f3d21] transition">Apply Now</button>
          </div>
        ))}
      </div>

      <form className="mt-10 bg-[#f5f5f0] rounded-2xl p-6 grid md:grid-cols-2 gap-4">
        <input placeholder="Nama Lengkap" className="px-4 py-3 rounded-xl border border-gray-200" />
        <input placeholder="Email" className="px-4 py-3 rounded-xl border border-gray-200" />
        <input placeholder="No. Telepon" className="px-4 py-3 rounded-xl border border-gray-200" />
        <input placeholder="Posisi yang Dilamar" className="px-4 py-3 rounded-xl border border-gray-200" />
        <input type="file" className="px-4 py-3 rounded-xl border border-gray-200" />
        <textarea placeholder="Surat Lamaran" rows={4} className="px-4 py-3 rounded-xl border border-gray-200 md:col-span-2" />
        <div className="md:col-span-2">
          <button className="w-full px-6 py-3 rounded-xl bg-[#14532d] text-white hover:bg-[#0f3d21] transition">Kirim Aplikasi</button>
        </div>
      </form>
    </div>
  )
}
