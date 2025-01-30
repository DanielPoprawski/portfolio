import { useState } from "react";

export default function Contact() {
      const [data, setData] = useState({
            name: "",
            email: "",
            message: "",
      });

      const handleChange = (e) => {
            setData({
                  ...data,
                  [e.target.name]: e.target.value,
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(data);
            setData({
                  name: "",
                  email: "",
                  message: "",
            });
      };

      return (
            <>
                  <div className="flex flex-col items-center min-h-screen bg-gray-50 bg-opacity-75 py-12 px-4 sm:px-6 lg:px-8">
                        <form
                              onSubmit={handleSubmit}
                              className="w-full max-w-xl space-y-6 bg-slate-50 px-6 py-4 rounded-lg "
                        >
                              <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact:</h2>
                                    <p className="text-gray-600 text-center max-w-2xl mb-8">
                                          If you would like to contact me, please leave a message here with your name,
                                          email (or phone number) and what services I may provide for you and I will
                                          contact you as soon as possible
                                    </p>
                              </div>

                              <div>
                                    <label className="block text-sm font-bold text-gray-700">Name:</label>
                                    <input
                                          type="text"
                                          name="name"
                                          value={data.name}
                                          onChange={handleChange}
                                          placeholder="John Doe"
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                              </div>

                              <div>
                                    <label className="block text-sm font-bold text-gray-700">Email:</label>
                                    <input
                                          type="email"
                                          name="email"
                                          value={data.email}
                                          onChange={handleChange}
                                          placeholder="johndoe@youremail.net"
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                              </div>

                              <div>
                                    <label className="block text-sm font-bold text-gray-700">Message:</label>
                                    <textarea
                                          rows={3}
                                          name="message"
                                          value={data.message}
                                          onChange={handleChange}
                                          placeholder="Enter your message"
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                                    />
                              </div>

                              <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                    Submit
                              </button>
                        </form>
                  </div>
            </>
      );
}
