import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageSquare, Building2, Star, Search } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('book');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('Any');
  const [selectedType, setSelectedType] = useState('Any Type');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      hospital: 'Central Medical Center',
      rating: 4.8,
      reviews: 124,
      availability: 'Today',
      status: 'Available',
      nextAvailable: 'Today, 3:00 PM',
      consultationTypes: ['Video', 'Chat'],
      timeSlots: ['9:00 AM', '10:30 AM', '2:00 PM']
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      hospital: 'Westside Hospital',
      rating: 4.9,
      reviews: 98,
      availability: 'Tomorrow',
      status: 'Busy',
      nextAvailable: 'Tomorrow, 10:00 AM',
      consultationTypes: ['Video', 'Chat'],
      timeSlots: ['9:00 AM', '10:30 AM', '2:00 PM']
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      hospital: 'Northview Medical Center',
      rating: 4.7,
      reviews: 156,
      availability: 'Today',
      status: 'Available',
      nextAvailable: 'Today, 4:30 PM',
      consultationTypes: ['Video', 'Chat'],
      timeSlots: ['9:00 AM', '10:30 AM', '2:00 PM']
    }
  ];

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: 'March 30, 2025',
      time: '3:00 PM',
      type: 'Video',
      status: 'Confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Neurology',
      date: 'April 2, 2025',
      time: '10:00 AM',
      type: 'Chat',
      status: 'Pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === 'book'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('book')}
          >
            Book Consultation
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === 'appointments'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('appointments')}
          >
            My Appointments
          </button>
        </div>

        {activeTab === 'book' ? (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Online Consultations</h1>
              <p className="mt-2 text-gray-600">Book appointments with specialists and receive medical advice</p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center mb-6">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                  >
                    <option>All Specialties</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                    <option>Pediatrics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedAvailability}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                  >
                    <option>Any</option>
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>This Week</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Type</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option>Any Type</option>
                    <option>Video</option>
                    <option>Chat</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Doctor List */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Available Doctors</h2>
                <span className="text-gray-500">Showing {doctors.length} doctors</span>
              </div>

              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <div className="flex space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500 text-2xl">👤</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{doctor.name}</h3>
                        <div className="flex items-center text-gray-600 mt-1">
                          <span>{doctor.specialty}</span>
                          <span className="mx-2">•</span>
                          <Building2 className="h-4 w-4" />
                          <span className="ml-1">{doctor.hospital}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="ml-1">
                            {doctor.rating}/5 ({doctor.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center ${
                        doctor.status === 'Available' ? 'text-green-600' : 'text-orange-600'
                      }`}>
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          doctor.status === 'Available' ? 'bg-green-600' : 'bg-orange-600'
                        }`}></span>
                        {doctor.status}
                      </div>
                      <div className="text-gray-600 mt-1">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Next available: {doctor.nextAvailable}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Video className="h-5 w-5 text-gray-400 mr-1" />
                        <span>Video Consultation</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 text-gray-400 mr-1" />
                        <span>Chat Consultation</span>
                      </div>
                    </div>
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                      Book Appointment
                    </button>
                  </div>

                  <div className="mt-4 flex space-x-4">
                    {doctor.timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
              <p className="mt-2 text-gray-600">Manage your upcoming and past consultations</p>
            </div>

            {/* Upcoming Appointments */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{appointment.doctor}</h3>
                        <p className="text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center mt-2 text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {appointment.date}
                          <Clock className="h-4 w-4 mx-2" />
                          {appointment.time}
                        </div>
                        <div className="flex items-center mt-2">
                          {appointment.type === 'Video' ? (
                            <Video className="h-4 w-4 mr-2" />
                          ) : (
                            <MessageSquare className="h-4 w-4 mr-2" />
                          )}
                          {appointment.type} Consultation
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          appointment.status === 'Confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                        <div className="mt-4 space-x-2">
                          {appointment.status === 'Confirmed' && (
                            <button className="bg-black text-white px-4 py-2 rounded-md">
                              Join
                            </button>
                          )}
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">
                            Reschedule
                          </button>
                          <button className="text-red-600 px-4 py-2 rounded-md">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Appointments */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">
                No past appointments
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;