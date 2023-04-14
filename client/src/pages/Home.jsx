import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FlightInfo from '../components/FlightInfo';
import Packages from '../components/Packages';
import Explore from '../components/Explore';
import ClientSection from '../components/ClientSection';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <main class="app">
                <Hero />
                <FlightInfo />
                <Packages />
                <Explore />
                <ClientSection />
            </main>
            <Footer />
        </div>
    );
}

export default Home;