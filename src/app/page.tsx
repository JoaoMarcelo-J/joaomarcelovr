'use client';

import Image from "next/image";
import { useState } from "react";
import { Linkedin, Github, Instagram, Twitter, Lightbulb, ExternalLink, Mail } from "lucide-react";

export default function Home() {
  const [dailyMessage, setDailyMessage] = useState(0);
  
  const motivationalMessages = [
    "A persistência é o caminho do êxito.",
    "Cada dia é uma nova oportunidade para ser melhor.",
    "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "Sonhe grande, trabalhe duro, seja paciente.",
    "A qualidade é melhor que a quantidade.",
    "Faça hoje o que outros não farão, para ter amanhã o que outros não terão.",
    "O conhecimento é o investimento que paga os melhores juros."
  ];

  const handleDailyMessage = () => {
    setDailyMessage((prev) => (prev + 1) % motivationalMessages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6 border border-slate-200 dark:border-slate-700">
        {/* Foto de perfil circular */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-slate-200 dark:border-slate-600">
            <Image
              src="/eu.jpg"
              alt="João Marcelo"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Informações pessoais */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            João Marcelo
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Software Engineer
          </p>
        </div>

        {/* Botões de redes sociais */}
        <div className="space-y-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/joaomarcelo-j/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-gray-700"
          >
            <Linkedin className="w-5 h-5" />
            <span>/in/joaomarcelo-j/</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JoaoMarcelo-J"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-gray-700"
          >
            <Github className="w-5 h-5" />
            <span>/JoaoMarcelo-J</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/joao_marcel0o0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-gray-700"
          >
            <Instagram className="w-5 h-5" />
            <span>@joao_marcel0o0</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/joaomarcel0vr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-gray-700"
          >
            <Twitter className="w-5 h-5" />
            <span>@joaomarcel0vr</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Email */}
          <a
            href="mailto:joaomarcelodev.contato@gmail.com"
            className="flex items-center justify-between w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-gray-700"
          >
            <Mail className="w-5 h-5" />
            <span>joaomarcelodev.contato@gmail.com</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Mensagem do dia */}
          <button
            onClick={handleDailyMessage}
            className="flex items-center justify-center gap-3 w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md border border-gray-700"
          >
            <Lightbulb className="w-5 h-5" />
            Mensagem do dia
          </button>

          {/* Exibir mensagem motivacional */}
          {dailyMessage > 0 && (
            <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600">
              <p className="text-slate-800 dark:text-slate-200 text-center italic">
                "{motivationalMessages[dailyMessage]}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
