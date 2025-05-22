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

import { Menu, X } from "lucide-react"

export const Header = () => {
    const [open, setOpen] = useState(false)         // dialog conta
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)  // menu mobile

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 ls:px-8">
                <div className="flex h-16 items-center justify-between">

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="sm:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <nav
                        className={`
                            flex-col sm:flex-row sm:flex
                            absolute sm:static top-full left-0 w-full sm:w-auto bg-background sm:bg-transparent
                            border-t sm:border-0 border-gray-200 sm:border-none
                            transition-transform transform
                            ${mobileMenuOpen ? "translate-y-0" : "-translate-y-[120%]"}
                            sm:translate-y-0
                            sm:items-center
                            sm:gap-6
                            sm:relative
                            sm:flex
                            p-4 sm:p-0
                        `}
                    >
                        <Button variant="secondary" asChild className="w-full sm:w-auto mb-2 sm:mb-0">
                            <Link href="/page/inicio">Home</Link>
                        </Button>
                        <Button variant="secondary" asChild className="w-full sm:w-auto">
                            <Link href="/page/meusArtigos">Artigos</Link>
                        </Button>
                    </nav>

                    {/* Avatar e Dialog conta */}
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Avatar className="cursor-pointer ml-4">
                                <AvatarImage src="/user.jpg" alt="Avatar" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[400px]">
                            <DialogHeader>
                                <DialogTitle>Conta</DialogTitle>
                            </DialogHeader>
                            <div className="flex flex-col gap-4 py-4">
                                <Button variant="outline" asChild>
                                    <Link href="/page/perfil">Perfil</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/page/meusArtigos">Meus Artigos</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/page/artigo">Criar novo Artigo</Link>
                                </Button>
                                <Button variant="destructive" asChild>
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
