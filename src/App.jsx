import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css'
// import Login from './Pages/Login.jsx'
// import Navbar from './components/Navbar/Navbar.jsx'
// import Hero from './components/Hero/Hero.jsx'
// import FeaturedEvents from './components/FeaturedEvents/Featured.jsx'
// import Footer from './components/Footer/Footer.jsx'
// import EventPage from './Pages/EventPage.jsx'
// import EventsUpdates from './components/EventsUpdates/EventUpdates.jsx' 
// import AboutPage from './Pages/AboutPage.jsx'
// import Register from './Pages/Register.jsx'
// import ForgotPass from './Pages/ForgotPass.jsx'
// import Booking from './components/Booking/Booking.jsx'


// function App() {
//   return (
//     <Routes>
//     {/* <div className="App"> */}
//       {/* <Navbar /> */}
//       <Route>
//       <Route path="/" element={<>
//             <Hero />
//             <FeaturedEvents />
//             <EventsUpdates />
//           </>} />
//           <Route path="/events" element={<EventPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgot-password" element={<ForgotPass />} />
//           <Route path="/booking" element={<Booking />} />
          
//       </Route>
//       {/* <Footer/> */}
//     </Routes>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.css'
import Login from './Pages/Login.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import FeaturedEvents from './components/FeaturedEvents/Featured.jsx'
import Footer from './components/Footer/Footer.jsx'
import EventPage from './Pages/EventPage.jsx'
import EventsUpdates from './components/EventsUpdates/EventUpdates.jsx' 
import AboutPage from './Pages/AboutPage.jsx'
import Register from './Pages/Register.jsx'
import ForgotPass from './Pages/ForgotPass.jsx'
import Booking from './components/Booking/Booking.jsx'

// Layout component yang berisi Navbar dan Footer
function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet /> {/* Komponen child routes akan di-render di sini */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home page */}
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedEvents />
            <EventsUpdates />
          </>
        } />
        
        {/* Other routes */}
        <Route path="/events" element={<EventPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
    </Routes>
  );
}

export default App;
