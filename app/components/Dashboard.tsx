"use client"

import { useState } from "react"
import { BookOpen, AlertCircle, TrendingUp, Calendar } from "lucide-react"

interface DashboardProps {
  isPremium: boolean
}

export default function Dashboard({ isPremium }: DashboardProps) {
  const [notifications] = useState([
    { id: 1, type: "aula", title: "Cálculo II em 30 min", time: "14:00", urgent: true },
    { id: 2, type: "prova", title: "Prova de Física", time: "Amanhã 08:00", urgent: false },
    { id: 3, type: "biblioteca", title: "Livro vence hoje", time: "23:59", urgent: true },
  ])

  const [todaySchedule] = useState([
    { time: "14:00", subject: "Cálculo II", room: "Sala 201", professor: "Prof. Silva" },
    { time: "16:00", subject: "Física Geral", room: "Lab 105", professor: "Prof. Santos" },
    { time: "18:00", subject: "Programação", room: "Lab Info", professor: "Prof. Costa" },
  ])

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#002b7f] to-blue-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Olá, João! 👋</h2>
        <p className="text-blue-100">Hoje é segunda-feira, 9 de dezembro</p>
        <div className="mt-4 flex items-center space-x-4">
          <div className="bg-white/20 rounded-lg p-3 flex-1">
            <div className="text-sm text-blue-100">Próxima aula</div>
            <div className="font-bold">Cálculo II - 30 min</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3 flex-1">
            <div className="text-sm text-blue-100">CR Atual</div>
            <div className="font-bold">8.7</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <Calendar className="w-8 h-8 text-[#002b7f] mb-2" />
          <div className="text-sm font-medium text-gray-900">Agendar Sala</div>
          <div className="text-xs text-gray-500">Salas disponíveis</div>
        </button>
        <button className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <BookOpen className="w-8 h-8 text-[#002b7f] mb-2" />
          <div className="text-sm font-medium text-gray-900">Biblioteca</div>
          <div className="text-xs text-gray-500">2 livros emprestados</div>
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Notificações</h3>
          {isPremium && (
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              Inteligentes
            </span>
          )}
        </div>
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center space-x-3 p-3 rounded-lg ${
                notification.urgent ? "bg-red-50 border border-red-200" : "bg-gray-50"
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${notification.urgent ? "bg-red-500" : "bg-blue-500"}`} />
              <div className="flex-1">
                <div className="font-medium text-gray-900">{notification.title}</div>
                <div className="text-sm text-gray-500">{notification.time}</div>
              </div>
              {notification.urgent && <AlertCircle className="w-5 h-5 text-red-500" />}
            </div>
          ))}
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Agenda de Hoje</h3>
        <div className="space-y-3">
          {todaySchedule.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-sm font-bold text-[#002b7f]">{item.time}</div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{item.subject}</div>
                <div className="text-sm text-gray-500">
                  {item.room} • {item.professor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Upgrade Banner */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-white">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-8 h-8" />
            <div className="flex-1">
              <div className="font-bold">Upgrade para Premium</div>
              <div className="text-sm text-yellow-100">
                Notificações inteligentes, dashboard personalizado e muito mais!
              </div>
            </div>
            <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-bold text-sm">R$ 9,90/mês</button>
          </div>
        </div>
      )}
    </div>
  )
}
