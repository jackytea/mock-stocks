import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-12">
      <div className="container px-8 sm:px-16 py-4 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div>
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Mock Stocks</Link>
              </div>

              <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">The trading platform for all.</p>

              <div className="flex mt-4 -mx-2">
                <a href="https://github.com/JackyTea/Mock-Stocks" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg className="text-gray-800 dark:text-white h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>

                <a href="https://jackytea.com/" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Personal Website" target="_blank" rel="noopener noreferrer">
                  <svg className="text-gray-800 dark:text-white h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.001 20H6.00098C4.89641 20 4.00098 19.1046 4.00098 18V7C4.00098 5.89543 4.89641 5 6.00098 5H10.001V7H6.00098V18H17.001V14H19.001V18C19.001 19.1046 18.1055 20 17.001 20ZM11.701 13.707L10.291 12.293L16.584 6H13.001V4H20.001V11H18.001V7.415L11.701 13.707Z"></path>
                  </svg>

                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Info</h3>
                <Link to="/guide" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Guide</Link>
                <Link to="/careers" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Stack</h3>
                <a href="https://www.mongodb.com/mern-stack" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">MERN</a>
                <a href="https://socket.io/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">Socket.IO</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Projects</h3>
                <a href="https://jackytea.github.io/GH_Gridlock_Pathfinder/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">Pathfinder</a>
                <a href="https://silly-shirley-309cb3.netlify.app/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">WebGL FPS</a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Portfolio</h3>
                <a href="https://github.com/JackyTea" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://jackytea.com/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">Personal Site</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">© Mock Stocks {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
