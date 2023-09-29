import Navbar from "@/components/global/Navbar";
import Platform from "./Platform";
import Header from "./home/Header";
import Improve from "./home/Improve";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Platform />
      <Improve />
    </div>
  );
}
