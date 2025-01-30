import { Link } from "react-router";

export default function Header() {
      return (
            <div className="flex justify-center font-semibold p-6 ">
                  <Link to="/">
                        <button className="bg-slate-200 bg-opacity-50 w-96 h-32 mx-2 my-2 text-5xl font-extralight text-center align-center">
                              <span>HOME</span>
                        </button>
                  </Link>
                  <Link to="/about">
                        <button className="bg-slate-200 bg-opacity-50 w-96 h-32 mx-2 my-2 text-5xl font-extralight text-center align-center">
                              <span>ABOUT</span>
                        </button>
                  </Link>
                  <Link to="/contact">
                        <button className="bg-slate-200 bg-opacity-50 w-96 h-32 mx-2 my-2 text-5xl font-extralight text-center align-center">
                              <span>CONTACT</span>
                        </button>
                  </Link>
            </div>
      );
}
