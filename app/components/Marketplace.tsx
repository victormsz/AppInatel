"use client"

import { useState } from "react"
import { Search, Star, Heart, ShoppingCart } from "lucide-react"

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "livros", name: "Livros" },
    { id: "materiais", name: "Materiais" },
    { id: "eletronicos", name: "Eletrônicos" },
    { id: "servicos", name: "Serviços" },
  ]

  const products = [
    {
      id: 1,
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
      id: 2,
      title: "Kit Protoboard + Componentes",
      price: 45,
      originalPrice: null,
      seller: "João Santos (Eng. Computação)",
      rating: 4.9,
      image: "/placeholder.svg?height=150&width=150",
      category: "materiais",
      condition: "Novo",
      likes: 8,
    },
    {
      id: 3,
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
    {
      id: 4,
      title: "Aulas Particulares de Física",
      price: 30,
      originalPrice: null,
      seller: "Prof. Carlos (Monitor)",
      rating: 5.0,
      image: "/placeholder.svg?height=150&width=150",
      category: "servicos",
      condition: "Por hora",
      likes: 15,
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Marketplace Inatel</h2>
        <p className="text-gray-600">Compre e venda entre estudantes</p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
              <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-40 object-cover" />
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
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-bold text-blue-900 mb-2">💡 Como funciona?</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Compre e venda com segurança entre estudantes</li>
          <li>• Taxa de apenas 5% sobre vendas</li>
          <li>• Pagamento protegido via PIX ou cartão</li>
          <li>• Avaliações e reputação dos vendedores</li>
        </ul>
      </div>
    </div>
  )
}
