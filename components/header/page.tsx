"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Menu principal */}
                    <nav className="flex items-center gap-6">
                        <Button variant="secondary" asChild>
                            <Link href="/page/inicio">Home</Link>
                        </Button>
                        <Button variant="secondary" asChild>
                            <Link href="/page/meusArtigos">Artigos</Link>
                        </Button>
                    </nav>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="/user.jpg" alt="Avatar" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[400px]">
                            <DialogHeader>
                                <DialogTitle>Conta</DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-col gap-4 py-4">
                                <Button variant="outline" asChild onClick={() => setOpen(false)}>
                                    <Link href="/page/perfil">Perfil</Link>
                                </Button>
                                <Button variant="outline" asChild onClick={() => setOpen(false)}>
                                    <Link href="/page/meusArtigos">Meus Artigos</Link>
                                </Button>
                                <Button variant="outline" asChild onClick={() => setOpen(false)}>
                                    <Link href="/page/artigo">Criar novo Artigo</Link>
                                </Button>
                                <Button variant="destructive" onClick={() => { setOpen(false) }}>
                                    <Link href="/">Sair</Link>
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header>
    )
}
