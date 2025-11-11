import { useState } from 'react'

const categories = ['Makanan','Minuman','Snack','Pelengkap']

function Card({item}){
  return (
    <div className="group rounded-2xl bg-white overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-2">
      <div className="h-40 bg-[#f5f5f0] grid place-items-center text-4xl">🥣</div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{item.name}</div>
          <div className="text-[#14532d] font-bold">{item.price}</div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
        <button className="mt-3 text-sm text-[#14532d] hover:underline">Lihat Detail</button>
      </div>
    </div>
  )
}

export default function Menu(){
  const [active, setActive] = useState('Makanan')
  const menu = {
    Makanan:[
      {name:'Soto Kudus', price:'28K', desc:'Kuah bening rempah khas Kudus'},
      {name:'Nasi Semarang', price:'32K', desc:'Lauk komplet cita rasa Jawa'},
      {name:'Indomie Goreng Special', price:'22K', desc:'Telur mata sapi & cabe rawit'},
    ],
    Minuman:[
      {name:'Es Teh Manis', price:'8K', desc:'Segar'},
      {name:'Kopi Susu', price:'18K', desc:'Robusta blend'},
    ],
    Snack:[
      {name:'Tahu Crispy', price:'15K', desc:'Gurih renyah'},
    ],
    Pelengkap:[
      {name:'Sambal Terasi', price:'6K', desc:'Pedas nendang'},
    ]
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="relative rounded-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black/40"/>
        <div className="absolute inset-0 p-8 text-white flex flex-col justify-end">
          <h1 className="text-4xl font-extrabold">Menu</h1>
          <p className="text-lg opacity-90">Mulai dari 15K - 45K</p>
        </div>
      </div>

      <div className="mt-8 flex gap-6 border-b border-gray-200">
        {categories.map(c => (
          <button key={c} onClick={()=>setActive(c)} className={`pb-3 -mb-px font-semibold transition relative ${active===c? 'text-[#14532d]':'text-gray-500 hover:text-[#14532d]'}`}>
            {c}
            <span className={`absolute left-0 -bottom-0.5 h-1 rounded-full transition-all ${active===c? 'w-full bg-[#facc15]':'w-0'}`}/>
          </button>
        ))}
      </div>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menu[active].map((item, i)=> <Card key={i} item={item} />)}
      </div>
    </div>
  )
}
