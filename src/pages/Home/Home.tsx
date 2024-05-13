
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-container-background">
      <div className="home-container-content">
        <div className="home-container-content--center">
          <h1 className="home-container-content__title">
            Online Bookstore App
          </h1>

          <p className="home-container-content__description">
            Discover our new online bookstare and start get your books today!
          </p>

          <div className="home-container-button">
            <Link
              className="home-container-button__login"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Home;