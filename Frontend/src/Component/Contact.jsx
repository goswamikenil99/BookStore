import React from "react";
import Nabbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <Nabbar />
      <div>
        <div className="card-body place-items-center mt-28">
          <div className="modal-box">
            <h3 className="font-bold text-2xl my-5 ml-36">Contact Us</h3>
            <form>
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="email" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M3 0.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 0.5V0h-2v2h-1V0H6v2H5V0H3v0.5zM1 3v10.5A1.5 1.5 0 0 0 2.5 15h11A1.5 1.5 0 0 0 15 13.5V3H1zm8.854 4.854a.5.5 0 0 1-.708 0L7 6.707 5.854 7.854a.5.5 0 1 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708zM7.5 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Mobile Number"
                  />
                </label>
              </div>
              <div>
                <label className="form-control text-lg">
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Suggestion"
                  ></textarea>
                </label>
              </div>
              <div className="flex justify-center mt-8">
                <Link to="/">
                <button type="submit" className="btn btn-outline">
                  Send Message
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
