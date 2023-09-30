import Platform from "./home/Platform";
import Header from "./home/Header";
import Improve from "./home/Improve";
import Purchase from "./home/Purchase";
import About from "./home/About";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Platform />
      <Improve />
      <Purchase />
      <About />
      <Footer />
    </div>
  );
}
