import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingSearchBar from './FloatingSearchBar';
import FloatingButtons from '../ui/FloatingButtons';
import useScrollToTop from '../../hooks/useScrollToTop';

export default function Layout() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FloatingSearchBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
