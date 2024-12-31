import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Vacancy = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search") || "";
    setSearchQuery(query);
    setHasSearched(query.length > 0);
  }, [location]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "https://final-project-api-alpha.vercel.app/api/jobs"
      );
      setData(res.data);
      setFilteredData(res.data);
    };

    fetch();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = data.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  const handleSearch = () => {
    setHasSearched(true);
    if (searchQuery.trim()) {
      const filtered = data.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleReset = () => {
    setSearchQuery("");
    setFilteredData(data);
    setHasSearched(false);
  };

  if (!data.length) {
    return <Spinner />;
  }

  return (
    <main>
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="text-black text-center py-[45px]">
            <div className="mb-4 font-semibold">
              {filteredData.length && `${filteredData.length} Jobs Available`}
            </div>
            {data && (
              <div className="flex justify-center mx-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="w-[80%] max-w-[600px] p-2 px-4 text-black outline-none border border-slate-200 bg-slate-50 placeholder:text-[14px] rounded-l-lg"
                  placeholder="Find your dream career"
                />
                <button
                  onClick={handleSearch}
                  className="bg-secondary hover:bg-secondary-50 transition duration-200 ease-in py-2 text-white border border-secondary px-4 rounded-r-lg"
                >
                  Cari
                </button>
                {hasSearched && searchQuery.length !== 0 && (
                  <button
                    onClick={handleReset}
                    className="ml-2 bg-gray-300 hover:bg-gray-400 transition duration-200 ease-in py-2 text-black px-4 rounded-lg"
                  >
                    Reset
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="my-12 px-4 md:px-0">
        <div className="grid gap-4 container mx-auto grid-cols-2 md:grid-cols-3">
          {filteredData &&
            filteredData.map((item) => <Card key={item.id} {...item} />)}
        </div>
      </section>
    </main>
  );
};

export default Vacancy;
