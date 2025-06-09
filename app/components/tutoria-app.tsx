"use client"

import { useState } from "react"
import {
  Bell,
  Search,
  Star,
  Clock,
  BookOpen,
  MessageCircle,
  Calendar,
  CreditCard,
  User,
  Home,
  GraduationCap,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Screen = "home" | "search" | "sessions" | "chat" | "profile"

interface Tutor {
  id: string
  name: string
  course: string
  rating: number
  price: number
  subjects: string[]
  avatar: string
  available: boolean
  description: string
}

interface Session {
  id: string
  tutorName: string
  subject: string
  date: string
  time: string
  status: "agendada" | "em-andamento" | "concluida"
  price: number
}

const mockTutors: Tutor[] = [
  {
    id: "1",
    name: "Ana Silva",
    course: "Engenharia de Software",
    rating: 4.9,
    price: 35,
    subjects: ["Programação", "Algoritmos", "Java"],
    avatar: "/placeholder.svg?height=40&width=40",
    available: true,
    description: "Veterana com 3 anos de experiência em desenvolvimento",
  },
  {
    id: "2",
    name: "Carlos Santos",
    course: "Engenharia Elétrica",
    rating: 4.8,
    price: 40,
    subjects: ["Circuitos", "Eletrônica", "Física"],
    avatar: "/placeholder.svg?height=40&width=40",
    available: true,
    description: "Ex-aluno trabalhando na indústria há 2 anos",
  },
  {
    id: "3",
    name: "Maria Costa",
    course: "Engenharia de Computação",
    rating: 4.7,
    price: 30,
    subjects: ["Matemática", "Cálculo", "Álgebra"],
    avatar: "/placeholder.svg?height=40&width=40",
    available: false,
    description: "Monitora de matemática com didática excepcional",
  },
]

const mockSessions: Session[] = [
  {
    id: "1",
    tutorName: "Ana Silva",
    subject: "Programação Java",
    date: "2024-01-15",
    time: "14:00",
    status: "agendada",
    price: 35,
  },
  {
    id: "2",
    tutorName: "Carlos Santos",
    subject: "Circuitos Elétricos",
    date: "2024-01-12",
    time: "16:00",
    status: "concluida",
    price: 40,
  },
]

export function TutoriaApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null)

  const filteredTutors = mockTutors.filter(
    (tutor) =>
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((subject) => subject.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const renderHomeScreen = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#002b7f] to-[#0066cc] text-white p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Olá, João! 👋</h1>
            <p className="text-blue-100">Pronto para aprender algo novo?</p>
          </div>
          <Bell className="h-6 w-6" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-blue-100">Próxima Sessão</p>
              <p className="font-semibold">Hoje, 14:00</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-blue-100">Horas Estudadas</p>
              <p className="font-semibold">12h este mês</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => setCurrentScreen("search")}
          className="h-20 bg-white border-2 border-[#002b7f] text-[#002b7f] hover:bg-blue-50"
        >
          <div className="text-center">
            <Search className="h-6 w-6 mx-auto mb-1" />
            <span className="text-sm">Encontrar Tutor</span>
          </div>
        </Button>
        <Button
          onClick={() => setCurrentScreen("sessions")}
          className="h-20 bg-white border-2 border-[#002b7f] text-[#002b7f] hover:bg-blue-50"
        >
          <div className="text-center">
            <Calendar className="h-6 w-6 mx-auto mb-1" />
            <span className="text-sm">Minhas Sessões</span>
          </div>
        </Button>
      </div>

      {/* Tutores Recomendados */}
      <div>
        <h2 className="text-xl font-bold text-[#002b7f] mb-4">Tutores Recomendados</h2>
        <div className="space-y-3">
          {mockTutors.slice(0, 2).map((tutor) => (
            <Card key={tutor.id} className="border-l-4 border-l-[#002b7f]">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={tutor.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {tutor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-[#002b7f]">{tutor.name}</h3>
                      <p className="text-sm text-gray-600">{tutor.course}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{tutor.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#002b7f]">R$ {tutor.price}/h</p>
                    <Badge variant={tutor.available ? "default" : "secondary"} className="mt-1">
                      {tutor.available ? "Disponível" : "Ocupado"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSearchScreen = () => (
    <div className="space-y-6">
      <div className="sticky top-0 bg-white z-10 pb-4">
        <h1 className="text-2xl font-bold text-[#002b7f] mb-4">Encontrar Tutor</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar por matéria ou nome do tutor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-[#002b7f] focus:ring-[#002b7f]"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredTutors.map((tutor) => (
          <Card
            key={tutor.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedTutor(tutor)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={tutor.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {tutor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#002b7f]">{tutor.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{tutor.course}</p>
                    <p className="text-sm text-gray-700 mb-2">{tutor.description}</p>
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tutor.rating}</span>
                      <span className="text-sm text-gray-500">(47 avaliações)</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tutor.subjects.map((subject) => (
                        <Badge key={subject} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#002b7f] text-lg">R$ {tutor.price}</p>
                  <p className="text-sm text-gray-500">por hora</p>
                  <Badge variant={tutor.available ? "default" : "secondary"} className="mt-2">
                    {tutor.available ? "Disponível" : "Ocupado"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal do Tutor */}
      {selectedTutor && (
        <div
          className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
          onClick={() => setSelectedTutor(null)}
        >
          <div
            className="bg-white w-full max-w-md rounded-t-2xl p-6 animate-in slide-in-from-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={selectedTutor.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {selectedTutor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold text-[#002b7f]">{selectedTutor.name}</h2>
                <p className="text-gray-600">{selectedTutor.course}</p>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{selectedTutor.rating}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{selectedTutor.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Especialidades:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedTutor.subjects.map((subject) => (
                  <Badge key={subject} className="bg-[#002b7f]">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-[#002b7f]">R$ {selectedTutor.price}/hora</span>
              <Badge variant={selectedTutor.available ? "default" : "secondary"}>
                {selectedTutor.available ? "Disponível Agora" : "Ocupado"}
              </Badge>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-[#002b7f] hover:bg-[#001a5c]" disabled={!selectedTutor.available}>
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Sessão
              </Button>
              <Button variant="outline" className="w-full border-[#002b7f] text-[#002b7f]">
                <MessageCircle className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderSessionsScreen = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#002b7f]">Minhas Sessões</h1>

      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Clock className="h-8 w-8 mx-auto mb-2 text-[#002b7f]" />
            <p className="text-2xl font-bold text-[#002b7f]">12</p>
            <p className="text-sm text-gray-600">Horas Totais</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-[#002b7f]" />
            <p className="text-2xl font-bold text-[#002b7f]">8</p>
            <p className="text-sm text-gray-600">Sessões</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <CreditCard className="h-8 w-8 mx-auto mb-2 text-[#002b7f]" />
            <p className="text-2xl font-bold text-[#002b7f]">R$ 280</p>
            <p className="text-sm text-gray-600">Investido</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {mockSessions.map((session) => (
          <Card key={session.id} className="border-l-4 border-l-[#002b7f]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#002b7f]">{session.subject}</h3>
                  <p className="text-sm text-gray-600">com {session.tutorName}</p>
                  <p className="text-sm text-gray-500">
                    {session.date} às {session.time}
                  </p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      session.status === "agendada"
                        ? "default"
                        : session.status === "em-andamento"
                          ? "destructive"
                          : "secondary"
                    }
                    className="mb-2"
                  >
                    {session.status === "agendada"
                      ? "Agendada"
                      : session.status === "em-andamento"
                        ? "Em Andamento"
                        : "Concluída"}
                  </Badge>
                  <p className="font-bold text-[#002b7f]">R$ {session.price}</p>
                </div>
              </div>
              {session.status === "agendada" && (
                <div className="flex space-x-2 mt-3">
                  <Button size="sm" className="bg-[#002b7f] hover:bg-[#001a5c]">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                  <Button size="sm" variant="outline" className="border-[#002b7f] text-[#002b7f]">
                    Reagendar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderChatScreen = () => (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[#002b7f]">Conversas</h1>

      <div className="space-y-3">
        {mockTutors.slice(0, 2).map((tutor) => (
          <Card key={tutor.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={tutor.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {tutor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#002b7f]">{tutor.name}</h3>
                  <p className="text-sm text-gray-600">Olá! Pronto para nossa sessão de hoje?</p>
                  <p className="text-xs text-gray-400">há 2 minutos</p>
                </div>
                <Badge className="bg-[#002b7f]">2</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderProfileScreen = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Avatar className="h-24 w-24 mx-auto mb-4">
          <AvatarImage src="/placeholder.svg?height=96&width=96" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold text-[#002b7f]">João Silva</h1>
        <p className="text-gray-600">Engenharia de Software - 3º período</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-[#002b7f]">Estatísticas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Sessões Realizadas</span>
            <span className="font-bold">8</span>
          </div>
          <div className="flex justify-between">
            <span>Horas de Estudo</span>
            <span className="font-bold">12h</span>
          </div>
          <div className="flex justify-between">
            <span>Nota Média</span>
            <span className="font-bold">4.8 ⭐</span>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <Button variant="outline" className="w-full justify-start border-[#002b7f] text-[#002b7f]">
          <CreditCard className="h-4 w-4 mr-2" />
          Métodos de Pagamento
        </Button>
        <Button variant="outline" className="w-full justify-start border-[#002b7f] text-[#002b7f]">
          <Settings className="h-4 w-4 mr-2" />
          Configurações
        </Button>
        <Button variant="outline" className="w-full justify-start border-[#002b7f] text-[#002b7f]">
          <GraduationCap className="h-4 w-4 mr-2" />
          Tornar-se Tutor
        </Button>
      </div>
    </div>
  )

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "home":
        return renderHomeScreen()
      case "search":
        return renderSearchScreen()
      case "sessions":
        return renderSessionsScreen()
      case "chat":
        return renderChatScreen()
      case "profile":
        return renderProfileScreen()
      default:
        return renderHomeScreen()
    }
  }

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Status Bar */}
      <div className="bg-[#002b7f] text-white text-center py-1 text-sm">9:41 AM • Inatel Tutoria</div>

      {/* Content */}
      <div className="p-4 pb-20">{renderCurrentScreen()}</div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentScreen("home")}
            className={`flex flex-col items-center space-y-1 ${currentScreen === "home" ? "text-[#002b7f]" : "text-gray-500"}`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Início</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentScreen("search")}
            className={`flex flex-col items-center space-y-1 ${currentScreen === "search" ? "text-[#002b7f]" : "text-gray-500"}`}
          >
            <Search className="h-5 w-5" />
            <span className="text-xs">Buscar</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentScreen("sessions")}
            className={`flex flex-col items-center space-y-1 ${currentScreen === "sessions" ? "text-[#002b7f]" : "text-gray-500"}`}
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">Sessões</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentScreen("chat")}
            className={`flex flex-col items-center space-y-1 ${currentScreen === "chat" ? "text-[#002b7f]" : "text-gray-500"}`}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs">Chat</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentScreen("profile")}
            className={`flex flex-col items-center space-y-1 ${currentScreen === "profile" ? "text-[#002b7f]" : "text-gray-500"}`}
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
