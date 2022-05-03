import userEvent from "@testing-library/user-event";
import React from "react";

export default function Profile(props) {
  return (
    <div className="main-wrapper">
      <div className="flex">
        <img
          src={props.image}
          alt="profile"
          className="rounded-full h-24 w-24 mx-12"
        />
        <table className="table-auto w-full">
          <tbody>
            <tr className="flex justify-between">
              <td className="text-2xl font-bold">{props.name}</td>
              <td className="text-sm text-right text-slate-400">
                {props.dateJoined}
              </td>
            </tr>
            <tr>
              <td className="text-sm text-sky-600 pb-3">{props.username}</td>
            </tr>
            <div className="w-11/12">
              <tr>
                <td className="text-sm text-slate-500 pb-5">{props.bio}</td>
              </tr>
            </div>

            <div className="bg-slate-100 border-hidden rounded-lg w-11/12">
              <tr>
                <td className="py-3.5 pl-8 pr-24">Repos</td>
                <td className="py-3.5 pl-8 pr-24">Followers</td>
                <td className="py-3.5 pl-8 pr-24"> Following</td>
              </tr>
              <tr>
                <td className="pb-3.5 pl-8 pr-24">{props.repoCount}</td>
                <td className="pb-3.5 pl-8 pr-24">{props.followers}</td>
                <td className="pb-3.5 pl-8 pr-24">{props.following}</td>
              </tr>
            </div>
            <div className="w-5/6">
              <tr className="flex justify-between">
                <td className="py-6">
                  <i className="fa-solid fa-location-dot pr-3"></i>
                  {props.location}
                </td>
                <td className="py-6">
                  <i className="fa-brands fa-twitter pr-3"></i>
                  {props.twitter}
                </td>
              </tr>
              <tr className="flex justify-between">
                <td>
                  <i className="fa-solid fa-link pr-3"></i> {props.blog}
                </td>
                <td>
                  <i className="fa-solid fa-building pr-3"></i>
                  {props.company}
                </td>
              </tr>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}
