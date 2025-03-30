import React, { useState } from 'react';
import { Search, Filter, Building2, Phone, Mail, Globe, MapPin, Star, X, Clock, Users, Stethoscope, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
const hospitals = [
  {
    id: 1,
    name: "Central Medical Center",
    address: "123 Main St, New York, NY",
    distance: "2.3 miles away",
    rating: 4.8,
    reviews: 243,
    specialties: ["Cardiology", "Neurology", "Oncology"],
    phone: "+1 (555) 123-4567",
    email: "info@centralmedical.com",
    website: "www.centralmedical.com",
    description: "Central Medical Center is a leading healthcare facility known for its exceptional patient care and advanced medical treatments.",
    hours: "Monday - Friday: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: Closed",
    doctors: 150,
    yearEstablished: 1985,
    emergencyServices: true,
    mapImage: "https://images.unsplash.com/photo-1577519558718-693e264c6eea?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 2,
    name: "Westside Hospital",
    address: "456 Park Ave, Los Angeles, CA",
    distance: "3.5 miles away",
    rating: 4.6,
    reviews: 187,
    specialties: ["Orthopedics", "Pediatrics", "Surgery"],
    phone: "+1 (555) 987-6543",
    email: "contact@westsidehospital.com",
    website: "www.westsidehospital.com",
    description: "Westside Hospital provides comprehensive healthcare services with a focus on surgical excellence and pediatric care.",
    hours: "24/7",
    doctors: 200,
    yearEstablished: 1990,
    emergencyServices: true,
    mapImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 3,
    name: "Northview Medical Center",
    address: "789 Oak St, Chicago, IL",
    distance: "1.8 miles away",
    rating: 4.9,
    reviews: 312,
    specialties: ["Cardiology", "Radiology", "Emergency Medicine"],
    phone: "+1 (555) 456-7890",
    email: "info@northviewmed.com",
    website: "www.northviewmed.com",
    description: "Northview Medical Center is renowned for its state-of-the-art cardiac care and emergency services.",
    hours: "24/7",
    doctors: 180,
    yearEstablished: 1978,
    emergencyServices: true,
    mapImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800&h=400"
  },
  {
    id: 4,
    name: "Eastside Health Center",
    address: "321 Pine St, Boston, MA",
    distance: "4.2 miles away",
    rating: 4.5,
    reviews: 156,
    specialties: ["Dermatology", "Psychiatry", "Internal Medicine"],
    phone: "+1 (555) 789-0123",
    email: "contact@eastsidehealth.com",
    website: "www.eastsidehealth.com",
    description: "Eastside Health Center specializes in comprehensive outpatient care and mental health services.",
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM\nSunday: Closed",
    doctors: 120,
    yearEstablished: 1995,
    emergencyServices: false,
    mapImage: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80&w=800&h=400"
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [rating, setRating] = useState('Any Rating');
  const [sortBy, setSortBy] = useState('Distance');
  const [selectedHospital, setSelectedHospital] = useState(null);
  
  const handleViewDetails = (hospitalId) => {
    setSelectedHospital(selectedHospital === hospitalId ? null : hospitalId);
  };


  const selectedHospitalData = selectedHospital 
    ? hospitals.find(h => h.id === selectedHospital)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hospital Directory</h1>
        <p className="text-gray-600 mb-8">Find specialized hospitals and doctors near you</p>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search hospitals by name, location, or specialty..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="City, State, or Zip"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option>All Specialties</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Oncology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option>Any Rating</option>
                <option>4.5+</option>
                <option>4.0+</option>
                <option>3.5+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Distance</option>
                <option>Rating</option>
                <option>Reviews</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <Filter className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">More Filters</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Results ({hospitals.length})</h2>
          <p className="text-gray-600">Showing 1-{hospitals.length} of {hospitals.length} hospitals</p>
        </div>

        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Building2 className="h-8 w-8 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
                    <div className="flex items-center mt-1 text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{hospital.address}</span>
                      <span className="mx-2">•</span>
                      <span>{hospital.distance}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(hospital.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 font-semibold">{hospital.rating}</span>
                      <span className="ml-1 text-gray-600">({hospital.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <button 
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedHospital === hospital.id 
                      ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  onClick={() => handleViewDetails(hospital.id)}
                >
                  {selectedHospital === hospital.id ? (
                    <span className="flex items-center">
                      <X className="h-4 w-4 mr-2" />
                      Close Details
                    </span>
                  ) : (
                    'View Details'
                  )}
                </button>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{hospital.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{hospital.email}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  <span>{hospital.website}</span>
                </div>
              </div>

              {/* Detailed View */}
              {selectedHospital === hospital.id && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-6">{hospital.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Hospital Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <Clock className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium text-gray-900">Operating Hours</p>
                              <p className="text-gray-600 whitespace-pre-line">{hospital.hours}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-5 w-5 text-gray-500 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900">Medical Staff</p>
                              <p className="text-gray-600">{hospital.doctors} Doctors</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900">Established</p>
                              <p className="text-gray-600">{hospital.yearEstablished}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Stethoscope className="h-5 w-5 text-gray-500 mr-3" />
                            <div>
                              <p className="font-medium text-gray-900">Emergency Services</p>
                              <p className="text-gray-600">
                                {hospital.emergencyServices ? '24/7 Emergency Care Available' : 'No Emergency Services'}
                              </p>
                            </div>
                          </div>
                          <Link to='/hospital/appointment'
                            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                          >
                            <Calendar className="h-5 w-5 mr-2" />
                            Book Appointment
                          </Link>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact & Location</h4>
                        <div className="bg-gray-100 rounded-lg p-4">
                          <img
                            src={hospital.mapImage}
                            alt={`${hospital.name} location`}
                            className="w-full h-48 rounded-lg mb-4 object-cover"
                          />
                          <div className="space-y-2">
                            <p className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {hospital.address}
                            </p>
                            <p className="flex items-center text-gray-600">
                              <Phone className="h-4 w-4 mr-2" />
                              {hospital.phone}
                            </p>
                            <p className="flex items-center text-gray-600">
                              <Mail className="h-4 w-4 mr-2" />
                              {hospital.email}
                            </p>
                            <p className="flex items-center text-gray-600">
                              <Globe className="h-4 w-4 mr-2" />
                              {hospital.website}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;