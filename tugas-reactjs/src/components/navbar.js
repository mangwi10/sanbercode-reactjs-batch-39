import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { state } = useContext(GlobalContext);
  const { input, setInput } = state;

  return (
    <div>
      <nav className=" container w-4/5 mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <h1 className="text-xl">Kelas ReactJs</h1>

          <div className="flex items-center">
            <Link onClick={input} className="mx-1.5 hover:underline" to="/">
              Home
            </Link>
            <Link
              onClick={input}
              className="mx-1.5 hover:underline"
              to="/tugas15"
            >
              Tugas 15
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
