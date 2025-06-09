"use client"

import { useState } from "react"
import { Star, Clock, Video, MessageCircle, Calendar } from "lucide-react"

export default function Tutoring() {
  const [selectedSubject, setSelectedSubject] = useState("todos")

  const subjects = [
    { id: "todos", name: "Todas" },
    { id: "calculo", name: "Cálculo" },
    { id: "fisica", name: "Física" },
    { id: "programacao", name: "Programação" },
    { id: "circuitos", name: "Circuitos" },
  ]

  const tutors = [
    {
      id: 1,
      name: "Maria Silva",
      course: "Engenharia Elétrica - 8º período",
      subjects: ["Cálculo I", "Cálculo II", "Física I"],
      rating: 4.9,
      reviews: 47,
      price: 25,
      avatar: "/placeholder.svg?height=60&width=60",
      online: true,
      description: "Monitora de Cálculo há 2 anos. Especialista em ajudar alunos com dificuldades.",
      nextAvailable: "Hoje 16:00",
    },
    {
      id: 2,
      name: "João Santos",
      course: "Engenharia de Computação - 7º período",
      subjects: ["Python", "Java", "Estruturas de Dados"],
      rating: 4.8,
      reviews: 32,
      price: 30,
      avatar: "/placeholder.svg?height=60&width=60",
      online: false,
      description: "Desenvolvedor e monitor. Foco em programação prática e projetos.",
      nextAvailable: "Amanhã 14:00",
    },
    {
      id: 3,
      name: "Ana Costa",
      course: "Engenharia Elétrica - 9º período",
      subjects: ["Circuitos I", "Circuitos II", "Eletrônica"],
      rating: 5.0,
      reviews: 28,
      price: 35,
      avatar: "/placeholder.svg?height=60&width=60",
      online: true,
      description: "Especialista em circuitos. Aulas práticas com simulações.",
      nextAvailable: "Hoje 18:00",
    },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tutoria Online</h2>
        <p className="text-gray-600">Encontre monitores e tutores especializados</p>
      </div>

      {/* Subject Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => setSelectedSubject(subject.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedSubject === subject.id ? "bg-[#002b7f] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {subject.name}
          </button>
        ))}
      </div>

      {/* Tutors List */}
      <div className="space-y-4">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="relative">
                <img
                  src={tutor.avatar || "/placeholder.svg"}
                  alt={tutor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                    tutor.online ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{tutor.name}</h3>
                    <p className="text-sm text-gray-600">{tutor.course}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#002b7f]">R$ {tutor.price}</div>
                    <div className="text-sm text-gray-500">por hora</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">{tutor.rating}</span>
                    <span className="text-sm text-gray-500">({tutor.reviews} avaliações)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{tutor.nextAvailable}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">{tutor.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {tutor.subjects.map((subject, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                      {subject}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#002b7f] text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2">
                    <Video className="w-4 h-4" />
                    <span>Agendar Aula</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Become Tutor Banner */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
        <h3 className="font-bold mb-2">💡 Seja um Tutor</h3>
        <p className="text-sm text-green-100 mb-3">
          Compartilhe seu conhecimento e ganhe dinheiro ajudando outros estudantes
        </p>
        <ul className="text-sm text-green-100 space-y-1 mb-4">
          <li>• Defina seus próprios horários</li>
          <li>• Ganhe até R$ 50/hora</li>
          <li>• Plataforma segura com pagamento garantido</li>
        </ul>
        <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold text-sm">Quero ser Tutor</button>
      </div>

      {/* How it Works */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-bold text-blue-900 mb-2">🎯 Como funciona?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="font-medium text-blue-900">1. Agende</div>
            <div className="text-blue-700">Escolha tutor e horário</div>
          </div>
          <div className="text-center">
            <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="font-medium text-blue-900">2. Estude</div>
            <div className="text-blue-700">Aula online via video</div>
          </div>
          <div className="text-center">
            <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="font-medium text-blue-900">3. Avalie</div>
            <div className="text-blue-700">Deixe sua avaliação</div>
          </div>
        </div>
      </div>
    </div>
  )
}
