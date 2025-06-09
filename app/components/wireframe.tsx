"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Wireframe() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#002b7f] text-center mb-8">Wireframe da Aplicação</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Tela Home */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-[#002b7f]">Tela Inicial</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-gray-300 rounded-lg p-4 space-y-4 bg-gray-50">
              {/* Header */}
              <div className="bg-[#002b7f] text-white p-3 rounded text-center">
                <div className="text-sm">Olá, João! 👋</div>
                <div className="text-xs">Pronto para aprender?</div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-gray-300 p-2 rounded text-center">
                  <div className="text-xs">📚</div>
                  <div className="text-xs">Próxima Sessão</div>
                </div>
                <div className="border border-gray-300 p-2 rounded text-center">
                  <div className="text-xs">⭐</div>
                  <div className="text-xs">12h Estudadas</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                <div className="border-2 border-[#002b7f] p-3 rounded text-center">
                  <div className="text-xs">🔍</div>
                  <div className="text-xs">Encontrar Tutor</div>
                </div>
                <div className="border-2 border-[#002b7f] p-3 rounded text-center">
                  <div className="text-xs">📅</div>
                  <div className="text-xs">Minhas Sessões</div>
                </div>
              </div>

              {/* Recommended Tutors */}
              <div>
                <div className="text-sm font-bold mb-2">Tutores Recomendados</div>
                <div className="space-y-2">
                  <div className="border border-gray-300 p-2 rounded flex justify-between">
                    <div>
                      <div className="text-xs font-bold">Ana Silva</div>
                      <div className="text-xs">Programação</div>
                    </div>
                    <div className="text-xs">R$ 35/h</div>
                  </div>
                  <div className="border border-gray-300 p-2 rounded flex justify-between">
                    <div>
                      <div className="text-xs font-bold">Carlos Santos</div>
                      <div className="text-xs">Circuitos</div>
                    </div>
                    <div className="text-xs">R$ 40/h</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tela Busca */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-[#002b7f]">Buscar Tutores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-gray-300 rounded-lg p-4 space-y-4 bg-gray-50">
              {/* Search Bar */}
              <div className="border border-gray-300 p-2 rounded">
                <div className="text-xs text-gray-500">🔍 Buscar por matéria...</div>
              </div>

              {/* Tutor Cards */}
              <div className="space-y-3">
                <div className="border border-gray-300 p-3 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold">Ana Silva</div>
                      <div className="text-xs">Eng. Software</div>
                      <div className="text-xs">⭐ 4.9 (47 avaliações)</div>
                      <div className="flex gap-1 mt-1">
                        <span className="text-xs bg-gray-200 px-1 rounded">Java</span>
                        <span className="text-xs bg-gray-200 px-1 rounded">Python</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">R$ 35/h</div>
                      <div className="text-xs bg-green-200 px-1 rounded">Disponível</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 p-3 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-bold">Carlos Santos</div>
                      <div className="text-xs">Eng. Elétrica</div>
                      <div className="text-xs">⭐ 4.8 (32 avaliações)</div>
                      <div className="flex gap-1 mt-1">
                        <span className="text-xs bg-gray-200 px-1 rounded">Circuitos</span>
                        <span className="text-xs bg-gray-200 px-1 rounded">Física</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold">R$ 40/h</div>
                      <div className="text-xs bg-green-200 px-1 rounded">Disponível</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tela Sessões */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-[#002b7f]">Minhas Sessões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-gray-300 rounded-lg p-4 space-y-4 bg-gray-50">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border border-gray-300 p-2 rounded text-center">
                  <div className="text-xs">⏰</div>
                  <div className="text-xs font-bold">12h</div>
                  <div className="text-xs">Totais</div>
                </div>
                <div className="border border-gray-300 p-2 rounded text-center">
                  <div className="text-xs">📚</div>
                  <div className="text-xs font-bold">8</div>
                  <div className="text-xs">Sessões</div>
                </div>
                <div className="border border-gray-300 p-2 rounded text-center">
                  <div className="text-xs">💳</div>
                  <div className="text-xs font-bold">R$ 280</div>
                  <div className="text-xs">Investido</div>
                </div>
              </div>

              {/* Session List */}
              <div className="space-y-3">
                <div className="border-l-4 border-l-[#002b7f] border border-gray-300 p-3 rounded">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-bold">Programação Java</div>
                      <div className="text-xs">com Ana Silva</div>
                      <div className="text-xs">Hoje, 14:00</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs bg-blue-200 px-1 rounded">Agendada</div>
                      <div className="text-xs font-bold">R$ 35</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="text-xs bg-[#002b7f] text-white px-2 py-1 rounded">Chat</button>
                    <button className="text-xs border border-[#002b7f] px-2 py-1 rounded">Reagendar</button>
                  </div>
                </div>

                <div className="border-l-4 border-l-gray-400 border border-gray-300 p-3 rounded">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-sm font-bold">Circuitos Elétricos</div>
                      <div className="text-xs">com Carlos Santos</div>
                      <div className="text-xs">12/01, 16:00</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs bg-gray-200 px-1 rounded">Concluída</div>
                      <div className="text-xs font-bold">R$ 40</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-center text-[#002b7f]">Navegação Inferior</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex justify-around">
              <div className="text-center">
                <div className="text-lg">🏠</div>
                <div className="text-xs">Início</div>
              </div>
              <div className="text-center">
                <div className="text-lg">🔍</div>
                <div className="text-xs">Buscar</div>
              </div>
              <div className="text-center">
                <div className="text-lg">📚</div>
                <div className="text-xs">Sessões</div>
              </div>
              <div className="text-center">
                <div className="text-lg">💬</div>
                <div className="text-xs">Chat</div>
              </div>
              <div className="text-center">
                <div className="text-lg">👤</div>
                <div className="text-xs">Perfil</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
