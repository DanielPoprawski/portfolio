export default function Login() {
      return (
            <div className="bg-gray-100 p-6 rounded-lg max-w-sm overflow-hidden shadow-lg text-black">
                  <h2 className="text-2xl font-bold p-2">Basic Login form</h2>
                  <p className="p-2">Upgrade your user experience with a login page</p>
                  <br />
                  <div className="mb-4 bg-gray-900 rounded-md text-left">
                        <label className="block text-white text-sm font-bold p-0.5 px-2 " htmlFor="email">
                              E-Mail
                        </label>
                        <input
                              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="email"
                              type="email"
                              placeholder="johndoe@example.com"
                        />
                  </div>
                  <div className="mb-4 bg-gray-900 rounded-md text-left">
                        <label className="block text-white text-sm font-bold p-0.5 px-2 " htmlFor="password">
                              Password
                        </label>
                        <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="password"
                              type="password"
                              placeholder="**********"
                        />
                  </div>
                  <div>
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mr-2">
                              Log In
                        </button>
                        <button className="bg-transparent hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md border border-black">
                              Sign Up
                        </button>
                  </div>
                  <br />
                  <a href="javascript:void(0)">
                        <u> Forgot password</u>
                  </a>
            </div>
      );
}
