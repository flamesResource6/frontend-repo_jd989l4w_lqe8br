export default function Kontak(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <form className="bg-white rounded-2xl shadow p-6 space-y-4">
          <input placeholder="Nama" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
          <input placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
          <input placeholder="No. Telepon" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
          <input placeholder="Subjek" className="w-full px-4 py-3 rounded-xl border border-gray-200" />
          <textarea placeholder="Pesan" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200" />
          <button className="px-6 py-3 rounded-xl bg-[#14532d] text-white hover:bg-[#0f3d21] transition">Kirim Pesan</button>
        </form>
        <div>
          <h2 className="text-2xl font-bold text-[#14532d]">Kontak</h2>
          <p className="mt-2 text-gray-600">Alamat: Jl. Mawar No. 10, Surabaya</p>
          <p className="text-gray-600">WhatsApp: 0812-3456-7890</p>
          <p className="text-gray-600">Instagram: @waroengdepesby</p>
          <p className="text-gray-600">Jam Operasional: 10.00 - 22.00</p>

          <div className="mt-6 rounded-2xl overflow-hidden">
            <iframe className="w-full" height="360" src="https://maps.google.com/maps?q=Surabaya&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
