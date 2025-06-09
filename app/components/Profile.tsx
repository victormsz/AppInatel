"use client"

import { useState } from "react"
import { Settings, CreditCard, Star, Trophy, BookOpen, Clock } from "lucide-react"

interface ProfileProps {
  isPremium: boolean
  setIsPremium: (premium: boolean) => void
}

export default function Profile({ isPremium, setIsPremium }: ProfileProps) {
  const [showUpgrade, setShowUpgrade] = useState(false)

  const stats = [
    { label: "Aulas Assistidas", value: "127", icon: BookOpen },
    { label: "Horas de Estudo", value: "89h", icon: Clock },
    { label: "CR Atual", value: "8.7", icon: Star },
    { label: "Posição no Ranking", value: "#12", icon: Trophy },
  ]

  const recentActivity = [
    { type: "aula", description: "Assistiu aula de Cálculo II", time: "2h atrás" },
    { type: "reserva", description: "Reservou Sala de Estudo A", time: "1 dia atrás" },
    { type: "compra", description: "Comprou livro no Marketplace", time: "2 dias atrás" },
    { type: "tutoria", description: "Aula de Física com Maria Silva", time: "3 dias atrás" },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-[#002b7f] to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white/20"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold">João Silva</h2>
            <p className="text-blue-100">Engenharia de Computação - 5º período</p>
            <p className="text-blue-100">RA: 2021001234</p>
            {isPremium && (
              <div className="flex items-center space-x-2 mt-2">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">⭐ PREMIUM</span>
                <span className="text-yellow-200 text-sm">Válido até 09/01/2025</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="w-5 h-5 text-[#002b7f]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Section */}
      {!isPremium ? (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-white">
          <h3 className="text-xl font-bold mb-2">🌟 Upgrade para Premium</h3>
          <p className="text-yellow-100 mb-4">Desbloqueie recursos exclusivos e melhore sua experiência acadêmica</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <h4 className="font-bold">Recursos Premium:</h4>
              <ul className="text-sm text-yellow-100 space-y-1">
                <li>✓ Dashboard personalizado</li>
                <li>✓ Notificações inteligentes</li>
                <li>✓ Salas de estudo premium</li>
                <li>✓ Desconto de 20% em reservas</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Benefícios Exclusivos:</h4>
              <ul className="text-sm text-yellow-100 space-y-1">
                <li>✓ Suporte prioritário</li>
                <li>✓ Acesso antecipado a novidades</li>
                <li>✓ Relatórios de desempenho</li>
                <li>✓ Backup automático de dados</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">R$ 9,90</div>
              <div className="text-sm text-yellow-100">por mês</div>
            </div>
            <button
              onClick={() => setShowUpgrade(true)}
              className="bg-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Assinar Agora
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
          <h3 className="text-xl font-bold mb-2">✅ Você é Premium!</h3>
          <p className="text-green-100 mb-4">Aproveite todos os recursos exclusivos disponíveis</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold">Próxima cobrança</div>
              <div className="text-sm text-green-100">09/01/2025 - R$ 9,90</div>
            </div>
            <button className="bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              Gerenciar Assinatura
            </button>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Atividade Recente</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-[#002b7f] rounded-full" />
              <div className="flex-1">
                <div className="font-medium text-gray-900">{activity.description}</div>
                <div className="text-sm text-gray-500">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <Settings className="w-8 h-8 text-[#002b7f] mb-2 mx-auto" />
          <div className="text-sm font-medium text-gray-900">Configurações</div>
        </button>
        <button className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <CreditCard className="w-8 h-8 text-[#002b7f] mb-2 mx-auto" />
          <div className="text-sm font-medium text-gray-900">Pagamentos</div>
        </button>
      </div>

      {/* Upgrade Modal */}
      {showUpgrade && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirmar Assinatura Premium</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Plano Premium Mensal</span>
                <span className="font-bold">R$ 9,90</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ 9,90/mês</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowUpgrade(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setIsPremium(true)
                  setShowUpgrade(false)
                }}
                className="flex-1 bg-[#002b7f] text-white py-3 rounded-lg font-medium"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
