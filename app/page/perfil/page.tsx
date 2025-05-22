"use client";
import { Header } from "@/components/header/page";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Perfil() {
  const userId = "1";

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
  const [messageType, setMessageType] = useState<"error" | "success" | "info">("info");

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
          password: "",
          confirmPassword: "",
        });
        setMessage("");
        setMessageType("info");
      } catch (err) {
        setMessage(err instanceof Error ? err.message : "Ocorreu um erro desconhecido");
        setMessageType("error");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [userId]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSave() {
    setMessage("");
    setMessageType("info");

    if (profile.password !== profile.confirmPassword) {
      setMessage("As senhas não coincidem");
      setMessageType("error");
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
      setMessageType("success");
      setProfile((prev) => ({ ...prev, password: "", confirmPassword: "" }));
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Ocorreu um erro desconhecido");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-6 flex-1 max-w-lg">
        <h1 className="text-xl font-semibold mb-6 text-center">Perfil</h1>

        {loading && (
          <p className="mb-4 text-blue-600 text-center" aria-live="polite">
            Carregando...
          </p>
        )}
        {message && (
          <p
            className={`mb-4 text-center ${
              messageType === "error"
                ? "text-red-600"
                : messageType === "success"
                ? "text-green-600"
                : "text-gray-700"
            }`}
            aria-live="polite"
          >
            {message}
          </p>
        )}

        <div className="space-y-6 mx-auto">
          <div className="flex flex-col items-center space-y-3">
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
              className="w-full border rounded-md p-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="URL da imagem do avatar"
              id="avatar"
              value={profile.avatar}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
                Nome
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                value={profile.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-1 text-sm font-medium">
                Sobrenome
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                value={profile.lastName}
                onChange={handleChange}
              />
            </div>

            <hr className="my-4 border-gray-300" />

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md p-3 bg-gray-100 cursor-not-allowed"
                value={profile.email}
                readOnly
                aria-readonly="true"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                value={profile.password}
                onChange={handleChange}
                placeholder="Digite uma nova senha"
                autoComplete="new-password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium">
                Confirmar senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                value={profile.confirmPassword}
                onChange={handleChange}
                placeholder="Confirme a nova senha"
                autoComplete="new-password"
              />
            </div>

            <button
              onClick={handleSave}
              className={`w-full rounded-md py-3 font-medium mt-4 transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
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
