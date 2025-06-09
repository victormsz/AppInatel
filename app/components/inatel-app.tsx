"use client"

import { useState } from "react"
import {
  Bell,
  Calendar,
  Users,
  Home,
  Search,
  User,
  BookOpen,
  Star,
  Clock,
  MessageCircle,
  CreditCard,
  Settings,
  GraduationCap,
  AlertCircle,
  Heart,
  ShoppingCart,
  Video,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Screen = "dashboard" | "rooms" | "marketplace" | "tutoring" | "profile"

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
  reviews: number
}

interface StudyRoom {
  id: string
  name: string
  capacity: number
  features: string[]
  available: boolean
  rating: number
}

interface Product {
  id: string
  title: string
  price: number
  originalPrice?: number
  seller: string
  rating: number
  image: string
  category: string
  condition: string
  likes: number
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
    course: "Engenharia de Software - 8º período",
    rating: 4.9,
    price: 35,
    subjects: ["Programação", "Algoritmos", "Java", "Python"],
    avatar: "/placeholder.svg?height=40&width=40",
    available: true,
    description:
      "Veterana com 3 anos de experiência em desenvolvimento. Especialista em programação orientada a objetos.",
    reviews: 47,
  },
  {
    id: "2",
    name: "Carlos Santos",
    course: "Engenharia Elétrica - Formado",
    rating: 4.8,
    price: 40,
    subjects: ["Circuitos", "Eletrônica", "Física", "Matemática"],
    avatar: "/placeholder.svg?height=40&width=40",
    available: true,
    description: "Ex-aluno trabalhando na indústria há 2 anos. Foco em circuitos e eletrônica aplicada.",
    reviews: 32,
  },
  {
    id: "3",
    name: "Maria Costa",
    course: "Engenharia de Computação - 9º período",
    rating: 4.7,
    price: 30,
    subjects: ["Matemática", "Cálculo", "Álgebra", "Estatística"],
    avatar: "/placeholder.svg?height=40&width=40",
    available: false,
    description: "Monitora de matemática com didática excepcional. Especialista em cálculo diferencial.",
    reviews: 28,
  },
]

const mockRooms: StudyRoom[] = [
  {
    id: "1",
    name: "Sala de Estudo A",
    capacity: 4,
    features: ["Ar condicionado", "Projetor", "Quadro branco", "Wi-Fi"],
    available: true,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Sala de Estudo B",
    capacity: 6,
    features: ["Quadro branco", "Wi-Fi", "Tomadas"],
    available: true,
    rating: 4.5,
  },
  {
    id: "3",
    name: "Sala de Estudo C",
    capacity: 2,
    features: ["Ar condicionado", "Mesa digitalizadora", "Wi-Fi"],
    available: false,
    rating: 4.9,
  },
]

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Cálculo - James Stewart (7ª Ed)",
    price: 85,
    originalPrice: 120,
    seller: "Maria Silva (Eng. Elétrica)",
    rating: 4.8,
    image: "/placeholder.svg?height=150&width=150",
    category: "livros",
    condition: "Usado - Bom estado",
    likes: 12,
  },
  {
    id: "2",
    title: "Kit Protoboard + Componentes",
    price: 45,
    seller: "João Santos (Eng. Computação)",
    rating: 4.9,
    image: "/placeholder.svg?height=150&width=150",
    category: "materiais",
    condition: "Novo",
    likes: 8,
  },
  {
    id: "3",
    title: "Notebook Dell Inspiron 15",
    price: 1200,
    originalPrice: 1800,
    seller: "Ana Costa (Administração)",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=150",
    category: "eletronicos",
    condition: "Usado - Excelente",
    likes: 25,
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

export function InatelApp() {
  const [activeTab, setActiveTab] = useState<Screen>("dashboard")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null)
  const [selectedDate, setSelectedDate] = useState("2024-12-09")
  const [selectedTime, setSelectedTime] = useState("14:00")
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const renderDashboard = () => {
    const notifications = [
      { id: 1, type: "aula", title: "Cálculo II em 30 min", time: "14:00", urgent: true },
      { id: 2, type: "prova", title: "Prova de Física", time: "Amanhã 08:00", urgent: false },
      { id: 3, type: "biblioteca", title: "Livro vence hoje", time: "23:59", urgent: true },
      { id: 4, type: "tutoria", title: "Sessão com Ana Silva", time: "Hoje 14:00", urgent: false },
    ]

    const todaySchedule = [
      { time: "14:00", subject: "Cálculo II", room: "Sala 201", professor: "Prof. Silva" },
      { time: "16:00", subject: "Física Geral", room: "Lab 105", professor: "Prof. Santos" },
      { time: "18:00", subject: "Programação", room: "Lab Info", professor: "Prof. Costa" },
    ]

    return (
      <div className="space-y-6">
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
          <button
            onClick={() => setActiveTab("rooms")}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <Calendar className="w-8 h-8 text-[#002b7f] mb-2" />
            <div className="text-sm font-medium text-gray-900">Agendar Sala</div>
            <div className="text-xs text-gray-500">Salas disponíveis</div>
          </button>
          <button
            onClick={() => setActiveTab("tutoring")}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <Users className="w-8 h-8 text-[#002b7f] mb-2" />
            <div className="text-sm font-medium text-gray-900">Tutoria</div>
            <div className="text-xs text-gray-500">Encontrar tutor</div>
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Notificações</h3>
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

        {/* Tutores Recomendados */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Tutores Recomendados</h3>
            <button
              onClick={() => setActiveTab("tutoring")}
              className="text-[#002b7f] text-sm font-medium hover:underline"
            >
              Ver todos
            </button>
          </div>
          <div className="space-y-3">
            {mockTutors.slice(0, 2).map((tutor) => (
              <div key={tutor.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
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
                  <div className="font-medium text-gray-900">{tutor.name}</div>
                  <div className="text-sm text-gray-500">{tutor.subjects.slice(0, 2).join(", ")}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{tutor.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#002b7f]">R$ {tutor.price}/h</div>
                  <Badge variant={tutor.available ? "default" : "secondary"}>
                    {tutor.available ? "Disponível" : "Ocupado"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderStudyRooms = () => {
    const timeSlots = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Agendamento de Salas</h2>
          <p className="text-gray-600">Reserve salas de estudo gratuitas para você e seu grupo</p>
        </div>

        {/* Date and Time Selection */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Selecione Data e Horário</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002b7f] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duração</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002b7f] focus:border-transparent">
                <option>1 hora</option>
                <option>2 horas</option>
                <option>3 horas</option>
                <option>4 horas</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTime === time ? "bg-[#002b7f] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Available Rooms */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Salas Disponíveis</h3>

          {mockRooms.map((room) => (
            <div
              key={room.id}
              className={`bg-white rounded-xl p-4 shadow-sm border ${
                room.available ? "border-gray-100" : "border-gray-200 opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{room.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>Até {room.capacity} pessoas</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{room.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {room.features.map((feature, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">GRATUITO</div>
                  <div className="text-sm text-gray-500">para estudantes</div>
                </div>
              </div>

              <button
                disabled={!room.available}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  room.available
                    ? "bg-[#002b7f] text-white hover:bg-blue-800"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {room.available ? "Reservar Sala" : "Indisponível"}
              </button>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-bold text-blue-900 mb-2">📚 Informações Importantes</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Todas as salas são gratuitas para estudantes do Inatel</li>
            <li>• Reservas podem ser feitas com até 7 dias de antecedência</li>
            <li>• Cancelamento gratuito até 2h antes do horário</li>
            <li>• Máximo de 4 horas por dia por estudante</li>
          </ul>
        </div>
      </div>
    )
  }

  const renderMarketplace = () => {
    const categories = [
      { id: "todos", name: "Todos" },
      { id: "livros", name: "Livros" },
      { id: "materiais", name: "Materiais" },
      { id: "eletronicos", name: "Eletrônicos" },
    ]

    const filteredProducts = mockProducts.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Marketplace Inatel</h2>
          <p className="text-gray-600">Compre e venda entre estudantes - sem taxas!</p>
        </div>

        {/* Search and Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002b7f] focus:border-transparent"
            />
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? "bg-[#002b7f] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-2 left-2">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">{product.condition}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>

                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-600">{product.likes}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-3">{product.seller}</div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-[#002b7f]">R$ {product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">R$ {product.originalPrice}</div>
                    )}
                  </div>
                  <button className="bg-[#002b7f] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sell Button */}
        <div className="fixed bottom-24 right-4">
          <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors">
            <span className="text-2xl">+</span>
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 className="font-bold text-green-900 mb-2">💡 Como funciona?</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Compre e venda com segurança entre estudantes</li>
            <li>• 100% gratuito - sem taxas ou comissões</li>
            <li>• Pagamento direto entre estudantes (PIX, dinheiro)</li>
            <li>• Sistema de avaliações e reputação</li>
          </ul>
        </div>
      </div>
    )
  }

  const renderTutoring = () => {
    const filteredTutors = mockTutors.filter(
      (tutor) =>
        tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutor.subjects.some((subject) => subject.toLowerCase().includes(searchQuery.toLowerCase())),
    )

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tutoria Online</h2>
          <p className="text-gray-600">Encontre monitores e tutores especializados</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por matéria ou nome do tutor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002b7f] focus:border-transparent"
          />
        </div>

        {/* Tutors List */}
        <div className="space-y-4">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedTutor(tutor)}
            >
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={tutor.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {tutor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                      tutor.available ? "bg-green-500" : "bg-gray-400"
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
                      <span className="text-sm text-gray-600">{tutor.available ? "Disponível agora" : "Ocupado"}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{tutor.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {tutor.subjects.map((subject, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tutor Modal */}
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
                    <span className="text-sm text-gray-500">({selectedTutor.reviews} avaliações)</span>
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

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 <strong>Taxa de serviço:</strong> 15% sobre o valor da sessão para manutenção da plataforma
                </p>
              </div>
            </div>
          </div>
        )}

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
            <li>• Taxa de apenas 15% sobre cada sessão</li>
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

  const renderProfile = () => {
    const stats = [
      { label: "Aulas Assistidas", value: "127", icon: BookOpen },
      { label: "Horas de Estudo", value: "89h", icon: Clock },
      { label: "CR Atual", value: "8.7", icon: Star },
      { label: "Sessões de Tutoria", value: "8", icon: Users },
    ]

    const recentActivity = [
      { type: "aula", description: "Assistiu aula de Cálculo II", time: "2h atrás" },
      { type: "reserva", description: "Reservou Sala de Estudo A", time: "1 dia atrás" },
      { type: "compra", description: "Comprou livro no Marketplace", time: "2 dias atrás" },
      { type: "tutoria", description: "Aula de Física com Maria Silva", time: "3 dias atrás" },
    ]

    return (
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#002b7f] to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20 border-4 border-white/20">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">João Silva</h2>
              <p className="text-blue-100">Engenharia de Computação - 5º período</p>
              <p className="text-blue-100">RA: 2021001234</p>
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

        {/* Tutoring Stats */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Estatísticas de Tutoria</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#002b7f]">8</div>
              <div className="text-sm text-gray-600">Sessões</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#002b7f]">12h</div>
              <div className="text-sm text-gray-600">Horas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#002b7f]">R$ 280</div>
              <div className="text-sm text-gray-600">Investido</div>
            </div>
          </div>
        </div>

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
            <CreditCard className="w-8 h-8 text-[#002b7f] mb-2 mx-auto" />
            <div className="text-sm font-medium text-gray-900">Pagamentos</div>
          </button>
          <button className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Settings className="w-8 h-8 text-[#002b7f] mb-2 mx-auto" />
            <div className="text-sm font-medium text-gray-900">Configurações</div>
          </button>
        </div>

        {/* Become Tutor */}
        <div className="bg-gradient-to-r from-[#002b7f] to-blue-600 rounded-xl p-4 text-white">
          <h3 className="text-xl font-bold mb-2">🎓 Torne-se um Tutor</h3>
          <p className="text-blue-100 mb-4">Compartilhe seu conhecimento e ganhe dinheiro</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <h4 className="font-bold">Benefícios:</h4>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>✓ Ganhe até R$ 50/hora</li>
                <li>✓ Horários flexíveis</li>
                <li>✓ Plataforma segura</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Requisitos:</h4>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>✓ CR mínimo 7.0</li>
                <li>✓ 5º período ou mais</li>
                <li>✓ Aprovação em entrevista</li>
              </ul>
            </div>
          </div>
          <button className="bg-white text-[#002b7f] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            <GraduationCap className="w-4 h-4 mr-2 inline" />
            Candidatar-se
          </button>
        </div>
      </div>
    )
  }

  const renderCurrentScreen = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "rooms":
        return renderStudyRooms()
      case "marketplace":
        return renderMarketplace()
      case "tutoring":
        return renderTutoring()
      case "profile":
        return renderProfile()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#002b7f] text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#002b7f] font-bold text-sm">I</span>
            </div>
            <h1 className="text-xl font-bold">Inatel Hub</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Bell className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pb-20 p-4">{renderCurrentScreen()}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === "dashboard" ? "text-[#002b7f] bg-blue-50" : "text-gray-500"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("rooms")}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === "rooms" ? "text-[#002b7f] bg-blue-50" : "text-gray-500"
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Salas</span>
          </button>
          <button
            onClick={() => setActiveTab("marketplace")}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === "marketplace" ? "text-[#002b7f] bg-blue-50" : "text-gray-500"
            }`}
          >
            <Search className="w-5 h-5" />
            <span className="text-xs">Marketplace</span>
          </button>
          <button
            onClick={() => setActiveTab("tutoring")}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === "tutoring" ? "text-[#002b7f] bg-blue-50" : "text-gray-500"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs">Tutoria</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === "profile" ? "text-[#002b7f] bg-blue-50" : "text-gray-500"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
