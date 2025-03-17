// ProfileEditor.jsx
import React, { useState } from "react";
import { Camera, Save, X } from "lucide-react";

export default function ProfileEditor() {
      const [formData, setFormData] = useState({
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            bio: "Web developer with 5 years of experience in React and Node.js",
            location: "Sarasota, FL",
            phone: "(555) 123-4567",
            website: "www.johndoe.com",
            twitter: "@johndoe",
            github: "github.com/johndoe",
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            alert("Profile updated successfully!");
      };

      return (
            <div className="bg-gray-100 p-6 rounded-lg max-w-xl overflow-hidden shadow-lg text-black">
                  <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Profile Editor</h2>
                  </div>

                  <div className="flex items-center justify-center mb-6 relative">
                        <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
                              <img
                                    src="https://placehold.co/24?text=Profile+Picture"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                              />
                              <button className="absolute bottom-0 right-52 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
                                    <Camera size={18} />
                              </button>
                        </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                                          First Name
                                    </label>
                                    <input
                                          type="text"
                                          id="firstName"
                                          name="firstName"
                                          value={formData.firstName}
                                          onChange={handleChange}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                              </div>
                              <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                                          Last Name
                                    </label>
                                    <input
                                          type="text"
                                          id="lastName"
                                          name="lastName"
                                          value={formData.lastName}
                                          onChange={handleChange}
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                              </div>
                        </div>

                        <div className="mb-4">
                              <label className="block text-sm font-medium mb-1" htmlFor="email">
                                    Email
                              </label>
                              <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                              />
                        </div>

                        <div className="mb-4">
                              <label className="block text-sm font-medium mb-1" htmlFor="bio">
                                    Bio
                              </label>
                              <textarea
                                    id="bio"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                              ></textarea>
                        </div>

                        <div className="mb-4">
                              <label className="block text-sm font-medium mb-1" htmlFor="location">
                                    Location
                              </label>
                              <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                              />
                        </div>

                        <div className="mb-4">
                              <h3 className="font-medium text-sm mb-2">Social Profiles</h3>
                              <div className="space-y-3">
                                    <input
                                          type="text"
                                          name="website"
                                          value={formData.website}
                                          onChange={handleChange}
                                          placeholder="Website"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    <input
                                          type="text"
                                          name="github"
                                          value={formData.github}
                                          onChange={handleChange}
                                          placeholder="GitHub"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                    <input
                                          type="text"
                                          name="twitter"
                                          value={formData.twitter}
                                          onChange={handleChange}
                                          placeholder="Twitter"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                              </div>
                        </div>

                        <div className="flex justify-end">
                              <button
                                    type="button"
                                    className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded-md mr-2"
                              >
                                    Cancel
                              </button>
                              <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex items-center"
                              >
                                    <Save size={18} className="mr-1" />
                                    Save Changes
                              </button>
                        </div>
                  </form>
            </div>
      );
}
