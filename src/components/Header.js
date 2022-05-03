import React from "react";

export default function Header(props) {
  return (
    <div className="main-wrapper">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl">devfinder</h1>
      </div>
      <div className="text-center mt-10">
        <form>
          <i className="fa fa-search w-6 mr-3.5"></i>
          <input
            className="container"
            type="text"
            placeholder="Search GitHub username..."
            name="username"
            value={props.user}
            onChange={props.handleClick}
          />
          <button
            className="ml-3.5 bg-sky-600 text-sm h-10 w-20 text-white rounded"
            type="submit"
            onClick={props.getUser}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
