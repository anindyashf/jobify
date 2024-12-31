import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useAnimeOnView } from "../hooks/useAnimeOnView";
import anime from "animejs";

const Home = () => {
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const heroRef = useAnimeOnView(
    {
      targets: ".hero-section",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutQuad",
    },
    { threshold: 0.3 }
  );

  const introRef = useAnimeOnView(
    {
      targets: ".intro-section",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      delay: anime.stagger(100),
      easing: "easeOutQuad",
    },
    { threshold: 0.3 }
  );

  const whyRef = useAnimeOnView(
    {
      targets: ".why-section",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutQuad",
    },
    { threshold: 0.3 }
  );

  const companiesRef = useAnimeOnView(
    {
      targets: ".logo",
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 800,
      easing: "easeOutBack",
      delay: anime.stagger(100), // Sequential animation
    },
    { threshold: 0.3 }
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/vacancy?search=${searchQuery.trim()}`);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "https://final-project-api-alpha.vercel.app/api/jobs"
      );
      setData(res.data);
    };

    fetch();
  }, []);

  if (!data) {
    return <Spinner />;
  }

  return (
    <main>
      <section
        ref={heroRef}
        className="hero-section bg-cover bg-center flex items-end mb-32 bg-no-repeat bg-[url('/images/home/Hero-BG.png')] h-[350px]"
      >
        <div className="container mx-auto">
          <div className="mx-4">
            <div className="bg-white text-black text-center rounded-md shadow-md py-[45px] translate-y-[90px] max-w-[900px] mx-auto">
              <div className="mb-4 font-semibold">{`${data.length} Jobs Available`}</div>
              <div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-[80%] max-w-[400px] p-2 px-4 text-black outline-none border border-slate-200 bg-slate-50 placeholder:text-[14px] rounded-l-lg"
                  placeholder="Find your dream career"
                />
                <button
                  onClick={handleSearch}
                  className="bg-secondary hover:bg-secondary-50 transition duration-200 ease-in py-2 text-white border border-secondary px-2 md:px-4 rounded-r-lg"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={introRef}
        className="intro-section relative bg-[url('/images/home/Introduction.png')] bg-center bg-no-repeat bg-cover hidden md:block"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/80 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="px-16 py-32 max-w-[500px] bg-white">
            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-secondary">
              DISCOVER YOUR DREAM CAREER HERE!
            </h2>
            <p className="text-base font-md text-gray-700 md:text-lg">
              JOBIFY is a cutting-edge job search platform designed to connect
              top talent with leading companies. Our mission is to help you find
              opportunities that align with your skills, interests, and
              aspirations.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={whyRef}
        className="why-section my-24 bg-secondary px-4 md:px-0"
      >
        <div className="rounded-2xl gap-4 md:gap-32 container mx-auto flex flex-col md:flex-row items-center py-12 md:py-32">
          <div className="flex-1 mb-4 md:mb-0">
            <h1 className="text-3xl text-white font-bold mb-6">
              WHY OUR WEBSITE?
            </h1>
            <p className="text-white">
              From startups to multinational corporations, JOBIFY connects you
              with organizations looking for the best talent. Join a platform
              trusted by industry leaders to find their next star employee. Join
              JOBIFY today and take the next step in building a brighter future!
            </p>
          </div>
        </div>
      </section>

      <section
        ref={companiesRef}
        className="companies-section mb-24 px-4 md:px-0"
      >
        <div className="container mx-auto overflow-hidden">
          <h2 className="font-bold text-lg md:text-3xl text-center">
            MORE THAN 150+ COMPANIES
          </h2>
          <div className="flex justify-center flex-col my-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 mb-8 place-items-center">
              <div className="logo">
                <img src="/images/logo/GoTo.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/Netflix.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/OVO.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/Pertamina.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/Transjakarta.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/Bandai.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/SEGA.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/Elex.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/Elnusa.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/Sucofindo.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/BurgerKing.png" width={120} />
              </div>
              <div className="logo">
                <img src="/images/logo/Traveloka.png" width={120} />
              </div>
            </div>
            <div className="text-center mt-4">
              <Link to="/vacancy">
                <button className="bg-secondary hover:bg-secondary-50 transition duration-200 ease-in p-2 px-6 font-semibold text-xl text-white rounded-lg">
                  Explore Career
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
