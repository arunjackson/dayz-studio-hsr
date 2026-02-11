import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StudioProvider } from './context/StudioContext';
import AppContainer from './components/Layout/AppContainer';
import BottomNav from './components/Navigation/BottomNav';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ProgramsPage from './pages/ProgramsPage';
import BookingPage from './pages/BookingPage';
import DirectionsPage from './pages/DirectionsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage'; // ✅ ONCE - CORRECT
import ProgramDetailModal from './components/Modals/ProgramDetailModal';
import './styles/globals.css';

function App() {
  return (
    <HelmetProvider>
      <StudioProvider>
        <Router>
          <AppContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/directions" element={<DirectionsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} /> {/* ✅ ROUTE - CORRECT */}
            </Routes>
            <BottomNav />
            <ProgramDetailModal />
          </AppContainer>
        </Router>
      </StudioProvider>
    </HelmetProvider>
  );
}

export default App;
