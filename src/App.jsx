import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Dashboard from './components/dashboard/Dashboard';
import Ideas from './components/dashboard/Ideas';
import Discussions from './components/dashboard/Discussions';
import Profile from './components/dashboard/Profile';
import Settings from './components/dashboard/Settings';
import Analytics from './components/dashboard/Analytics';
import QRCodeOverlay from './components/QRCodeOverlay';
import MobileAppPromo from './components/MobileAppPromo';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="pt-16">
        {children}
      </div>
      <MobileAppPromo />
      <Footer />
      <QRCodeOverlay />
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Routes>
            {/* Dashboard routes with special layout */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="ideas" element={<Ideas />} />
              <Route path="discussions" element={<Discussions />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>

            {/* Main routes with consistent header/footer layout */}
            <Route path="/" element={
              <MainLayout>
                <>
                  <Hero />
                  <Features />
                </>
              </MainLayout>
            } />
            <Route path="/about" element={
              <MainLayout>
                <About />
              </MainLayout>
            } />
            <Route path="/login" element={
              <MainLayout>
                <Login />
              </MainLayout>
            } />
            <Route path="/register" element={
              <MainLayout>
                <Register />
              </MainLayout>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;