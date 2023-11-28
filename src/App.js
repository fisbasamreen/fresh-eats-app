import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HeadlineCards/>
    <Food/>
    <Category/>
    </>
  );
}
