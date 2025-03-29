import { Link } from 'react-router-dom';
import { FaUserMd, FaHospital, FaCalendarCheck, FaComments } from 'react-icons/fa';

function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative py-20 px">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative max-w-4xl mx-auto text-center text-white z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Connecting Healthcare Professionals Worldwide
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          A secure platform for doctors to collaborate, share knowledge, and provide better patient care through collective expertise.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/signup" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-300">
            Join as Doctor
          </Link>
          <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Join as Patient
          </Link>
        </div>
      </div>
    </section>

    
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transforming Healthcare Collaboration
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Our platform brings together medical professionals, hospitals, and patients in one integrated ecosystem.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaComments className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Doctor Forum</h3>
            <p className="text-gray-600 mb-4">
              Connect with peers, share research, and discuss complex cases in a secure environment.
            </p>
            <Link to="/forum" 
  className="text-black font-medium hover:underline inline-flex items-center border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
        Explore Forum 
        <span className="ml-2">→</span>
</Link>
          </div>

          <div className="text-center p-6">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHospital className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hospital Directory</h3>
            <p className="text-gray-600 mb-4">
              Find specialized hospitals and doctors based on location, expertise, and patient ratings.
            </p>
            <Link to="/hospitals" className="text-black font-medium hover:underline inline-flex items-center border border-black px-4 py-2 rounded-lg hover:bg-slate-200 transition-all duration-200">
              Find Hospitals
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="text-center p-6">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ">
              <FaCalendarCheck className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Online Consultations</h3>
            <p className="text-gray-600 mb-4">
              Book consultations with specialists and receive medical advice from qualified professionals.
            </p>
            <Link to="/consultations" className="text-black font-medium hover:underline inline-flex items-center border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
              Book Appointment
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <div className="text-gray-600">Registered Doctors</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">1,200+</div>
            <div className="text-gray-600">Hospitals Listed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25,000+</div>
            <div className="text-gray-600">Forum Discussions</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <div className="text-gray-600">Consultations</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Join Our Growing Medical Community</h2>
          <p className="text-xl mb-8">
            Connect with thousands of healthcare professionals, access specialized knowledge, and improve patient outcomes.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/signup" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100">
              Join as Doctor
            </Link>
            <Link to="/signup" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10">
              Join as Patient
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaUserMd className="text-2xl" />
            <span className="text-xl font-semibold">MedConnect</span>
          </div>
          <div className="text-gray-600">
            © 2025 MedConnect. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;