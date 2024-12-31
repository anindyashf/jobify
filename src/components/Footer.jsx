import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-gray-200 px-2 sm:px-4 py-4 rounded-tl-lg rounded-tr-lg shadow-md mt-auto">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="text-sm text-gray-600">
          © Anindya Shafa Sanbercode Batch 62
        </div>
        <div id="navbar-default">
          <ul className="flex flex-row gap-4 items-center">
            <li>
              <Link
                to="https://open.spotify.com/user/31kvc2tughuej4g7eestguusm2r4?si=ab706e0959e045eb"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition ease-in duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                target="_blank"
              >
                Spotify
              </Link>
            </li>
            <li>
              <Link
                to="https://gitlab.com/aninzmn"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 transition ease-in duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                target="_blank"
              >
                GitLab
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
