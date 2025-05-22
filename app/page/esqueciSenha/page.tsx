import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordForm() {
  return (
    <div className="border rounded-lg p-8 shadow-sm max-w-md mx-auto">
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

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Nova senha
            </label>
            <Input id="password" name="password" type="password" placeholder="••••••••" required />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirmar nova senha
            </label>
            <Input id="confirmPassword" name="confirmPassword" type="password" placeholder="••••••••" required />
          </div>

          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
            Alterar
          </Button>
        </form>

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
  )
}
