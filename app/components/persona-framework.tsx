"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Target, Heart, Zap } from "lucide-react"

export function PersonaFramework() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-[#002b7f] text-center mb-8">Framework da Persona</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Persona Principal */}
        <Card className="border-l-4 border-l-[#002b7f]">
          <CardHeader>
            <CardTitle className="flex items-center text-[#002b7f]">
              <User className="h-5 w-5 mr-2" />
              Persona Principal: João Silva
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Demografia</h4>
              <ul className="text-sm space-y-1">
                <li>• Idade: 20 anos</li>
                <li>• Curso: Engenharia de Software, 3º período</li>
                <li>• Localização: Santa Rita do Sapucaí, MG</li>
                <li>• Renda: Mesada + estágio (R$ 800/mês)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Comportamento</h4>
              <ul className="text-sm space-y-1">
                <li>• Usa smartphone 6h+ por dia</li>
                <li>• Prefere apps intuitivos e rápidos</li>
                <li>• Busca ajuda online frequentemente</li>
                <li>• Valoriza feedback imediato</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Objetivos e Motivações */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <Target className="h-5 w-5 mr-2" />
              Objetivos & Motivações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Objetivos</h4>
              <ul className="text-sm space-y-1">
                <li>• Melhorar notas em disciplinas difíceis</li>
                <li>• Economizar tempo nos estudos</li>
                <li>• Ter acesso a ajuda quando precisar</li>
                <li>• Conectar-se com veteranos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Motivações</h4>
              <ul className="text-sm space-y-1">
                <li>• Medo de reprovar</li>
                <li>• Pressão familiar</li>
                <li>• Desejo de se destacar</li>
                <li>• Construir network</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Dores e Frustrações */}
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <Heart className="h-5 w-5 mr-2" />
              Dores & Frustrações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Dores Atuais</h4>
              <ul className="text-sm space-y-1">
                <li>• Dificuldade em matérias específicas</li>
                <li>• Falta de tempo para estudar tudo</li>
                <li>• Professores pouco acessíveis</li>
                <li>• App atual confuso e limitado</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Frustrações</h4>
              <ul className="text-sm space-y-1">
                <li>• Não conseguir ajuda quando precisa</li>
                <li>• Perder tempo procurando informações</li>
                <li>• Interface confusa do app atual</li>
                <li>• Falta de feedback sobre progresso</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Necessidades */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <Zap className="h-5 w-5 mr-2" />
              Necessidades & Soluções
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Necessidades</h4>
              <ul className="text-sm space-y-1">
                <li>• Acesso rápido a tutores qualificados</li>
                <li>• Interface simples e intuitiva</li>
                <li>• Flexibilidade de horários</li>
                <li>• Preços acessíveis</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Como a Tutoria Resolve</h4>
              <ul className="text-sm space-y-1">
                <li>• Conecta com tutores em segundos</li>
                <li>• Interface limpa e moderna</li>
                <li>• Agendamento flexível 24/7</li>
                <li>• Preços competitivos e transparentes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cenário de Uso */}
      <Card className="bg-gradient-to-r from-[#002b7f] to-[#0066cc] text-white">
        <CardHeader>
          <CardTitle>Cenário de Uso Típico</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-100">
            "É véspera da prova de Algoritmos e João está com dúvidas em recursão. Já são 21h e ele precisa de ajuda
            urgente. Abre o app Inatel Tutoria, busca por 'Algoritmos', encontra Ana Silva disponível, agenda uma sessão
            para 21h30 e resolve suas dúvidas em 1 hora. Resultado: confiança para a prova e nota 8.5!"
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
