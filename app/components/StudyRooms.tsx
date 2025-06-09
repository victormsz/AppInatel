"use client";

import { useState } from "react";
import { Users, Star } from "lucide-react";

interface StudyRoomsProps {
  isPremium: boolean;
}

export default function StudyRooms({ isPremium }: StudyRoomsProps) {
  const [selectedDate, setSelectedDate] = useState("2024-12-09");
  const [selectedTime, setSelectedTime] = useState("14:00");

  const rooms = [
    {
      id: 1,
      name: "Sala de Estudo Premium A",
      capacity: 4,
      price: 15,
      rating: 4.8,
      features: ["Ar condicionado", "Projetor", "Quadro branco", "Wi-Fi"],
      available: true,
      premium: true,
    },
    {
      id: 2,
      name: "Sala de Estudo B",
      capacity: 6,
      price: 10,
      rating: 4.5,
      features: ["Quadro branco", "Wi-Fi"],
      available: true,
      premium: false,
    },
    {
      id: 3,
      name: "Sala de Estudo Premium C",
      capacity: 2,
      price: 12,
      rating: 4.9,
      features: ["Ar condicionado", "Mesa digitalizadora", "Wi-Fi"],
      available: false,
      premium: true,
    },
  ];

  const timeSlots = [
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Agendamento de Salas
        </h2>
        <p className="text-gray-600">
          Reserve salas de estudo para você e seu grupo
        </p>
      </div>

      {/* Date and Time Selection */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">
          Selecione Data e Horário
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002b7f] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duração
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002b7f] focus:border-transparent">
              <option>1 hora</option>
              <option>2 horas</option>
              <option>3 horas</option>
              <option>4 horas</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Horário
          </label>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTime === time
                    ? "bg-[#002b7f] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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

        {rooms.map((room) => (
          <div
            key={room.id}
            className={`bg-white rounded-xl p-4 shadow-sm border ${
              room.available ? "border-gray-100" : "border-gray-200 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-bold text-gray-900">{room.name}</h4>
                  {room.premium && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Premium
                    </span>
                  )}
                </div>
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
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-[#002b7f]">
                  R$ {room.price}
                </div>
                <div className="text-sm text-gray-500">por hora</div>
              </div>
            </div>

            <button
              disabled={!room.available || (room.premium && !isPremium)}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                room.available && (!room.premium || isPremium)
                  ? "bg-[#002b7f] text-white hover:bg-blue-800"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              {!room.available
                ? "Indisponível"
                : room.premium && !isPremium
                ? "Requer Premium"
                : "Reservar Sala"}
            </button>
          </div>
        ))}
      </div>

      {/* Premium Benefits */}
      {!isPremium && (
        <div className="bg-gradient-to-r from-[#002b7f] to-blue-600 rounded-xl p-4 text-white">
          <h3 className="font-bold mb-2">🌟 Benefícios Premium</h3>
          <ul className="text-sm text-blue-100 space-y-1">
            <li>• Acesso a salas premium com ar condicionado</li>
            <li>• Reserva prioritária</li>
            <li>• Desconto de 20% em todas as reservas</li>
            <li>• Cancelamento gratuito até 1h antes</li>
          </ul>
          <button className="bg-white text-[#002b7f] px-4 py-2 rounded-lg font-bold text-sm mt-3">
            Upgrade por R$ 9,90/mês
          </button>
        </div>
      )}
    </div>
  );
}
