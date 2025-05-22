"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Heart, Trash2, Edit } from "lucide-react"
import { Header } from "@/components/header/page"

interface Article {
  id: string
  title: string
  thumbnail: string
  createdAt: string
  updatedAt: string
  likes: number
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript",
    thumbnail: "/placeholder.svg?height=80&width=80",
    createdAt: "Março 18, 2025",
    updatedAt: "Março 20, 2025",
    likes: 16,
  },
  {
    id: "2",
    title: "Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript",
    thumbnail: "/placeholder.svg?height=80&width=80",
    createdAt: "Março 18, 2025",
    updatedAt: "Março 20, 2025",
    likes: 16,
  },
  {
    id: "3",
    title: "Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript",
    thumbnail: "TS",
    createdAt: "Março 18, 2025",
    updatedAt: "Março 20, 2025",
    likes: 16,
  },
  {
    id: "4",
    title: "Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript",
    thumbnail: "/placeholder.svg?height=80&width=80",
    createdAt: "Março 18, 2025",
    updatedAt: "Março 20, 2025",
    likes: 16,
  },
  {
    id: "5",
    title: "Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript",
    thumbnail: "/placeholder.svg?height=80&width=80",
    createdAt: "Março 18, 2025",
    updatedAt: "Março 20, 2025",
    likes: 16,
  },
  {
    id: "6",
    title: "Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript",
    thumbnail: "TS",
    createdAt: "Março 18, 2025",
    updatedAt: "Março 20, 2025",
    likes: 15,
  },
]

export default function MeusArtigos() {
  const [articles, setArticles] = useState<Article[]>(mockArticles)
  const [articleToDelete, setArticleToDelete] = useState<Article | null>(null)

  const handleDeleteClick = (article: Article) => {
    setArticleToDelete(article)
  }

  const handleConfirmDelete = () => {
    if (articleToDelete) {
      setArticles(articles.filter((article) => article.id !== articleToDelete.id))
      setArticleToDelete(null)
    }
  }

  const handleCancelDelete = () => {
    setArticleToDelete(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className={`container mx-auto px-4 py-6 flex-1 ${articleToDelete ? "filter blur-sm" : ""}`}>
        <h1 className="text-xl font-medium mb-6">Meus Artigos</h1>
        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                {article.thumbnail === "TS" ? (
                  <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                    TS
                  </div>
                ) : (
                  <Image
                    src={article.thumbnail || "/placeholder.svg"}
                    alt="Thumbnail"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm mb-2">{article.title}</h3>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>Criado em: {article.createdAt}</div>
                  <div>Alterado em: {article.updatedAt}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 text-red-500">
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="text-sm">{article.likes}</span>
                </div>
                <button
                  onClick={() => handleDeleteClick(article)}
                  className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal de confirmação de exclusão */}
      {articleToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-sm text-gray-500 mb-4">My Articles / Delet article</div>
            <h2 className="text-xl font-semibold mb-4">Excluir Artigo?</h2>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-medium text-sm mb-2">{articleToDelete.title}</h3>
              <div className="text-xs text-gray-500 space-y-1">
                <div>Criado em: {articleToDelete.createdAt}</div>
                <div>Alterado em: {articleToDelete.updatedAt}</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Tem certeza de que deseja excluir este artigo? Esta ação não poderá ser desfeita.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleCancelDelete}
                className="w-full py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
