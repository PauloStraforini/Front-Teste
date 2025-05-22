"use client";
import { Header } from "@/components/header/page";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Perfil() {
  // Simula um userId fixo (substitua pelo real da sessão)
  const userId = "1";

  // Estado do perfil
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Buscar dados do perfil ao montar
  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/profile/${userId}`);
        if (!res.ok) throw new Error("Erro ao carregar perfil");
        const data = await res.json();

        setProfile({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          avatar: data.avatar || "",
          password: "", // não preencher senha por segurança
          confirmPassword: "",
        });
      } catch (err) {
        if (err instanceof Error) {
          if (err instanceof Error) {
            setMessage(err instanceof Error ? err.message : "Ocorreu um erro desconhecido");
          } else {
            setMessage("Ocorreu um erro desconhecido");
          }
        } else {
          setMessage("Ocorreu um erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [userId]);

  // Handle input change
  function handleChange(e: { target: { id: any; value: any; }; }) {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  }

  // Enviar atualização
  async function handleSave() {
    setMessage("");
    if (profile.password !== profile.confirmPassword) {
      setMessage("As senhas não coincidem");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/v1/profile/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: profile.firstName,
          lastName: profile.lastName,
          avatar: profile.avatar,
          password: profile.password || undefined,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Erro ao salvar");
      }

      setMessage("Perfil atualizado com sucesso!");
      setProfile((prev) => ({ ...prev, password: "", confirmPassword: "" }));
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("Ocorreu um erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-1">
        <h1 className="text-xl font-medium mb-6">Perfil</h1>
        {loading && <p className="mb-4 text-blue-600">Carregando...</p>}
        {message && <p className="mb-4 text-red-600">{message}</p>}

        <div className="space-y-6 max-w-md mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              {profile.avatar ? (
                <Image
                  src={profile.avatar}
                  alt="Avatar"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Avatar"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="text-sm font-medium">Avatar</div>
            <input
              type="text"
              className="w-full border rounded-md p-2 text-sm"
              placeholder="imagem-de-perfil123.png"
              id="avatar"
              value={profile.avatar}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block mb-1 text-sm">
                Nome
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border rounded-md p-3"
                value={profile.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-1 text-sm">
                Sobrenome
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border rounded-md p-3"
                value={profile.lastName}
                onChange={handleChange}
              />
            </div>

            <hr className="my-4" />

            <div>
              <label htmlFor="email" className="block mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md p-3 bg-gray-100"
                value={profile.email}
                readOnly
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded-md p-3"
                value={profile.password}
                onChange={handleChange}
                placeholder="Digite uma nova senha"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-1 text-sm">
                Confirmar senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full border rounded-md p-3"
                value={profile.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme a nova senha"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-black text-white rounded-md py-3 font-medium mt-4"
              disabled={loading}
            >
              Salvar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
