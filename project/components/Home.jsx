import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <img
            src="../../Assets/mile1-assets/logo.svg"
            alt="Teknolojik Yemekler"
          />
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
          <Link className="link" to="/OrderPizza">
            ACIKTIM
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
