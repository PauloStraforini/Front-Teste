"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

const handleLogin = async () => {
  setError("")
  if (!email || !password) {
    setError("Preencha email e senha")
    return
  }

  try {
    const res = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    console.log("Resposta status:", res.status)
    const data = await res.json()
    console.log("Resposta data:", data)

    if (!res.ok) {
      setError(data.message || "Credenciais inválidas")
      return
    }

    router.push("/dashboard")
  } catch (err) {
    console.error("Erro no fetch:", err)
    setError("Erro ao conectar com o servidor")
  }
}

  return (
    <div className="border rounded-lg p-8 shadow-sm">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-sm text-muted-foreground">
            Acesse sua conta para acompanhar artigos exclusivos, favoritar e muito mais.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          <div className="flex justify-end">
            <Link href="/page/esqueciSenha" className="text-xs text-muted-foreground hover:underline">
              Esqueceu a senha?
            </Link>
          </div>
          <Button
            className="w-full bg-black text-white hover:bg-gray-800"
            onClick={handleLogin}
          >
            Login
          </Button>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Novo usuário?{" "}
              <Link href="/page/registro" className="hover:underline">
                Clique aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
