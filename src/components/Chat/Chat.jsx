import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../Base/Button";
import api from "../../services/api";

const socket = io("http://localhost:3000");

const Chat = () => {
  const [mensagens, setMensagens] = useState([]);
  const [conteudo, setConteudo] = useState("");
  const { user } = useAuth();
  const usuario_id = user?.id;

  useEffect(() => {
    const carregarMensagensRecentes = async () => {
      try {
        const res = await api.get("/mensagens");
        const dataAtual = new Date();
        const trintaMinutos = new Date(dataAtual.getTime() - 30 * 60 * 1000);

        const mensagensRecentes = res.data.data.filter((msg) => {
          const msgDate = new Date(msg.updatedAt);
          return msgDate >= trintaMinutos;
        });

        setMensagens(mensagensRecentes);
      } catch (err) {
        console.error("Erro ao buscar mensagens:", err);
      }
    };

    carregarMensagensRecentes();
  }, []);

  useEffect(() => {
    socket.on("mensagemRecebida", (novaMensagem) => {
      setMensagens((prev) => [...prev, novaMensagem]);
    });

    socket.on("erroMensagem", (err) => {
      alert(err.message);
    });

    return () => {
      socket.off("mensagemRecebida");
      socket.off("erroMensagem");
    };
  }, []);

  const enviarMensagem = () => {
    if (!conteudo.trim()) return;
    socket.emit("enviarMensagem", {
      conteudo,
      usuario_id,
    });
    setConteudo("");
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-2 text-center">Chat</h2>

      <div className="border border-gray-200 rounded-lg p-2 h-100 overflow-y-auto overflow-x-hidden bg-white mb-2 text-sm break-words">
        {mensagens.length > 0 ? (
          mensagens.map((msg) => (
            <div key={msg.id} className="mb-1 whitespace-pre-wrap break-words">
              <span className="font-semibold text-blue-600">
                {msg.usuario?.nome || "Desconhecido"}:
              </span>{" "}
              <span>{msg.conteudo}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Nenhuma mensagem ainda.</p>
        )}
      </div>

      <div className="flex gap-1">
        <input
          type="text"
          value={conteudo}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              enviarMensagem();
            }
          }}
          onChange={(e) => setConteudo(e.target.value)}
          placeholder="Mensagem..."
          className="flex-1 border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
        />
        <Button
          onClick={enviarMensagem}
          color={"bg-blue-500 hover:bg-blue-700"}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default Chat;
