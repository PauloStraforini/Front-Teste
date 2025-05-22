import { Header } from "@/components/header/page"
import Image from "next/image"
import Link from "next/link"

export default function EditarArtigo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="container mx-auto px-4 py-6 flex-1">
        <h1 className="text-xl font-medium mb-6">Editar Artigo</h1>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-2xl">
              TS
            </div>
            <div className="flex-1">
              <div className="mb-1">Banner</div>
              <div className="border rounded-md p-2 text-gray-400">Adicione uma imagem</div>
            </div>
          </div>
          <div>
            <label htmlFor="titulo" className="block mb-1">
              Título
            </label>
            <input type="text" id="titulo" placeholder="Adicione um título" className="w-full border rounded-md p-3" />
          </div>
          <div>
            <label htmlFor="texto" className="block mb-1">
              Texto
            </label>
            <textarea id="texto" placeholder="Escreva seu artigo" className="w-full border rounded-md p-3 h-80" />
          </div>
          <button className="w-full bg-black text-white rounded-md py-3 font-medium">Salvar</button>
        </div>
      </main>
    </div>
  )
}
