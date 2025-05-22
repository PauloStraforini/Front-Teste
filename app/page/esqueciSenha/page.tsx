import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordForm() {
  return (
    <div className="border rounded-lg p-8 shadow-sm">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Link href="/" className="inline-flex items-center">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <h1 className="text-2xl font-bold">Esqueci a senha</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Sem problemas! Informe seu e-mail e enviaremos um link para redefinir sua senha.
        </p>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="space-y-2">
            <Input type="password" placeholder="Nova senha" />
          </div>
          <div className="space-y-2">
            <Input type="password" placeholder="Confirmar nova senha" />
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-800">Alterar</Button>
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
