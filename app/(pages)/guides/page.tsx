import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { GuidesMain } from "../components/guides-main";

export default function Guides() {
  return (
    <div>
      <div className="mb-32">
        <Navbar />
      </div>
      <div className="mb-32">
        <GuidesMain />
      </div>
      <Footer />
    </div>
  );
}
