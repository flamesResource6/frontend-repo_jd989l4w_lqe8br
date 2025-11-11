export default function Outlet(){
  const outlets = [
    {name:'Waroeng Depe - Pusat', address:'Jl. Mawar No. 10, Surabaya', hours:'10.00 - 22.00', img:''},
    {name:'Waroeng Depe - Barat', address:'Jl. Kenanga No. 5, Surabaya', hours:'10.00 - 22.00', img:''},
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-[#14532d]">Temukan Outlet Kami</h1>
      </header>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {outlets.map((o,i)=> (
          <div key={i} className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
            <div className="h-48 bg-[#f5f5f0] grid place-items-center text-4xl">🏠</div>
            <div className="p-5">
              <div className="font-semibold">{o.name}</div>
              <div className="text-sm text-gray-600">{o.address}</div>
              <div className="text-sm text-gray-700 mt-1">Jam: {o.hours}</div>
              <button className="mt-3 px-4 py-2 rounded-lg border border-[#14532d] text-[#14532d] hover:bg-[#14532d] hover:text-white transition">Lihat Lokasi</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl overflow-hidden">
        <iframe className="w-full" height="500" src="https://maps.google.com/maps?q=Surabaya&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
    </div>
  )
}
