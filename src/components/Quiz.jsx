// TODO: ADD HTML form validation - https://react-bootstrap.netlify.app/docs/forms/validation

export default function Quiz() {
      return (
            <div className="bg-gray-100 p-6 rounded-lg max-w-sm overflow-hidden shadow-lg text-black">
                  <h2 className="text-2xl font-bold p-2">Basic Quiz</h2>
                  <p className="p-2">
                        Get more customer interaction by adding a quiz components to your company's page. Engaging them
                        will make them pique their interest and get them to stick around longer.
                  </p>
                  <ul className="p-2 text-left">
                        <div key={"default-radio"}>
                              <label className="block mb-2">
                                    <input type="radio" name="group1" id="list-item-1" className="mr-2" />
                                    List item 1
                              </label>
                              <label className="block mb-2">
                                    <input type="radio" name="group1" id="list-item-2" className="mr-2" />
                                    List item 2
                              </label>
                              <label className="block mb-2">
                                    <input type="radio" name="group1" id="list-item-3" className="mr-2" />
                                    List item 3
                              </label>
                              <label className="block mb-2">
                                    <input type="radio" name="group1" id="list-item-4" className="mr-2" />
                                    List item 4
                              </label>
                        </div>
                  </ul>
                  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mr-2">
                        Submit
                  </button>
            </div>
      );
}
