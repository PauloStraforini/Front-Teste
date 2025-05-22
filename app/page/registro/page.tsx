"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

export default function RegisterForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.message || "Erro ao registrar")
        return
      }

      alert("Usuário registrado com sucesso!")
      router.push("/")
    } catch (error) {
      console.error("Erro na requisição:", error)
      alert("Erro ao conectar com o servidor.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold">Registrar</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Crie sua conta para explorar conteúdos incríveis, seguir autores e participar da comunidade.
          </p>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-base"
              aria-label="Email"
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-base"
              aria-label="Senha"
            />
            <Button
              className="w-full bg-black text-white hover:bg-gray-800 py-3 text-base"
              onClick={handleRegister}
            >
              Criar conta
            </Button>
            <div className="text-center mt-2">
              <p className="text-xs text-muted-foreground">
                Já tem cadastro?{" "}
                <Link href="/" className="hover:underline">
                  Clique aqui
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
