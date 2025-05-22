import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"

export default function RegisterForm() {
  return (
    <div className="border rounded-lg p-8 shadow-sm">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Link href="/" className="inline-flex items-center">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <h1 className="text-2xl font-bold">Registrar</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Crie sua conta para explorar conteúdos incríveis, seguir autores e participar da comunidade.
        </p>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="space-y-2">
            <Input type="password" placeholder="Senha" />
          </div>
          <div className="space-y-2">
            <Input type="password" placeholder="Confirmar senha" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-xs text-muted-foreground">
              Li e concordo com os Termos de Uso e a Política de Privacidade.
            </label>
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-800">Criar conta</Button>
          <div className="text-center">
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
  )
}
