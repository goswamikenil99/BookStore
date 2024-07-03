import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import list from "../../public/list.json";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            molestias repellat at blanditiis quia, dolor animi totam voluptates?
            Consequuntur veritatis molestiae quaerat accusantium, enim dicta
            perferendis vero fugiat harum nesciunt.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laborum molestias repellat at
            blanditiis quia, dolor animi totam voluptates? Consequuntur
            veritatis molestiae quaerat accusantium, enim dicta perferendis vero
            fugiat harum nesciunt.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 hover:scale-105 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
