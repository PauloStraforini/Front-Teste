"use client"

import { useState, ChangeEvent } from "react"
import { Header } from "@/components/header/page"

export default function EditarArtigo() {
  const [titulo, setTitulo] = useState("")
  const [texto, setTexto] = useState("")
  const [banner, setBanner] = useState<File | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)

  function handleBannerChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null
    setBanner(file)

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setBannerPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setBannerPreview(null)
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Aqui você pode enviar os dados para a API ou salvar localmente
    console.log({ titulo, texto, banner })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-1 max-w-3xl">
        <h1 className="text-xl font-medium mb-6">Editar Artigo</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-2xl">
              TS
            </div>
            <div className="flex-1">
              <label htmlFor="banner" className="block mb-1 font-medium">
                Banner
              </label>
              {bannerPreview ? (
                <img src={bannerPreview} alt="Preview do banner" className="w-full rounded-md mb-2 max-h-40 object-cover" />
              ) : (
                <div className="border rounded-md p-6 text-gray-400 mb-2">Adicione uma imagem</div>
              )}
              <input
                type="file"
                id="banner"
                accept="image/*"
                onChange={handleBannerChange}
                className="block w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="titulo" className="block mb-1 font-medium">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              placeholder="Adicione um título"
              className="w-full border rounded-md p-3"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="texto" className="block mb-1 font-medium">
              Texto
            </label>
            <textarea
              id="texto"
              placeholder="Escreva seu artigo"
              className="w-full border rounded-md p-3 h-80 resize-none"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-md py-3 font-medium hover:bg-gray-900"
          >
            Salvar
          </button>
        </form>
      </main>
    </div>
  )
}
