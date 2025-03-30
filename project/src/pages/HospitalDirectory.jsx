import { useState } from "react";
import {
  Search,
  Filter,
  Building2,
  Phone,
  Mail,
  Globe,
  MapPin,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

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
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [rating, setRating] = useState("Any Rating");
  const [sortBy, setSortBy] = useState("Distance");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Hospital Directory
        </h1>
        <p className="text-gray-600 mb-8">
          Find specialized hospitals and doctors near you
        </p>

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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="City, State, or Zip"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Specialty
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
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
          <h2 className="text-xl font-semibold text-gray-900">
            Results ({hospitals.length})
          </h2>
          <p className="text-gray-600">
            Showing 1-{hospitals.length} of {hospitals.length} hospitals
          </p>
        </div>

        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <Link
              to="/hospital/booking"
              key={hospital.id}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Building2 className="h-8 w-8 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {hospital.name}
                    </h3>
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
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 font-semibold">
                        {hospital.rating}
                      </span>
                      <span className="ml-1 text-gray-600">
                        ({hospital.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  View Details
                </button>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Specialties
                </h4>
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
