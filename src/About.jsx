export default function About() {
      return (
            <>
                  <div className="min-h-screen bg-gray-100 bg-opacity-75 flex flex-col">
                        <div className="container mx-auto px-4 py-16 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                              <p className="text-gray-800 text-lg leading-relaxed  mx-auto mb-16">
                                    &emsp; My name is Daniel Poprawski. I just got out of the Army after 4 years of
                                    service and I am pursuing a career as a front-end web developer. I have been
                                    programming since I was a teenager when I first discovered HTML and CSS, and later
                                    Javascript, my first programming language. After playing with Javscript I moved on
                                    to Python and Java and then finally came back to Javascript after discovering React.
                                    Programming is something that I have been passionate about for as long as I remember
                                    and I would be very happy and honored to build your website for you.
                              </p>
                              <div className="flex flex-col space-y-16 mx-auto">
                                    <div className="self-start">
                                          <div className="bg-white p-8 rounded-lg shadow-md w-3/5">
                                                <h3 className="text-2xl font-bold mb-4">
                                                      Eugene Garden & Harvest Center
                                                </h3>
                                                <p className="text-gray-600">
                                                      A fast, responsive website for a small business based in Eugene,
                                                      Oregon. This was my first professional project and it was built
                                                      with React and Bootstrap, then later converted over to Tailwind
                                                      CSS
                                                      <img
                                                            src="/src/assets/Eugene.png"
                                                            alt="Eugene Garden & Harvest Center"
                                                            className="mt-4 rounded-md shadow-sm max-w-md"
                                                      />
                                                </p>
                                          </div>
                                    </div>
                                    <div className="self-end">
                                          <div className="bg-white p-8 rounded-lg shadow-md w-3/5">
                                                <h3 className="text-2xl font-bold mb-4">
                                                      J&J Home Improvement Website
                                                </h3>
                                                <p className="text-gray-600">
                                                      J&J Home Improvement's website and portfolio. J&J Home Improvement
                                                      is a local home remodeling company in Sarasota, Florida. I built
                                                      their website using React and Tailwind CSS
                                                      <img
                                                            src="/src/assets/JandJ-Homes.png"
                                                            alt="J&J Home Improvement"
                                                            className="mt-4 rounded-md shadow-sm max-w-md"
                                                      />
                                                </p>
                                          </div>
                                    </div>
                                    {/* <div className="self-start">
                                          <div className="bg-white p-8 rounded-lg shadow-md w-max">
                                                <h3 className="text-2xl font-bold mb-4">Portfolio Website</h3>
                                                <p className="text-gray-600">
                                                      Modern, responsive portfolio showcasing my projects and skills in
                                                      web development.
                                                </p>
                                          </div>
                                    </div> */}
                              </div>
                        </div>
                  </div>
            </>
      );
}
