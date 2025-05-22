import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Header } from "@/components/header/page"

export default function ArtigoDetalhado() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-6 flex-1 max-w-3xl">
        <div className="rounded-lg overflow-hidden bg-blue-500 mb-6">
          <div className="flex items-center justify-center py-16">
            <div className="text-white text-8xl font-bold">
              <span className="mr-[-10px]">T</span>
              <span>S</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Autor"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-gray-600">Por John Doe - Março 20, 2025</span>
          </div>
          <button className="text-red-500">
            <Heart className="w-5 h-5 fill-current" />
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-6">
          Dominando TypeScript: Por que a Tipagem Estática Está Transformando o Desenvolvimento JavaScript
        </h1>

        <div className="prose max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales leo nisi, at scelerisque metus
            pharetra sed. Nulla eu efficitur dolor. Integer sit amet dui ornare, tempor risus a, vestibulum purus. Morbi
            lacus magna, molestie varius elit a, dignissim volutpat dui. Nam sit amet sem condimentum, hendrerit tortor
            nec, ultricies eros. Curabitur eget sodales leo non tempor ex. Vestibulum id fringilla est. Praesent id urna
            nisi. Phasellus ac odio eros. Vestibulum dictum erat nibh, vel placerat est condimentum vel. Phasellus
            malesuada, leo et commodo hendrerit, nisi tortor tincidunt ipsum, ut tincidunt enim sapien vel neque.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eu auctor felis.
          </p>
          <p>
            Proin vitae malesuada mauris. Morbi quis ex ligula. Aenean consectetur mauris ac magna. Sed ultrices, mauris
            tincidunt pulvinar scelerisque, dolor orci condimentum est, ut iaculis risus nisi quis risus.
          </p>
        </div>
      </main>
    </div>
  )
}
