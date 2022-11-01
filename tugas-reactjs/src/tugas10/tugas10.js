import React from "react";
import { useState } from "react";

const Tugas10 = () => {
  return (
    <div className="w-4/5 overflow-x-auto relative shadow-md mx-auto my-6 sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-white uppercase bg-violet-500">
          <tr>
            <th scope="col" className="py-3 px-6">
              NO
            </th>
            <th scope="col" className="py-3 px-6">
              NAMA
            </th>
            <th scope="col" className="py-3 px-6">
              MATA KULIAH
            </th>
            <th scope="col" className="py-3 px-6">
              NILAI
            </th>
            <th scope="col" className="py-3 px-6">
              INDEKS NILAI
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              1
            </th>
            <td className="py-4 px-6">John</td>
            <td className="py-4 px-6">Algoritma</td>
            <td className="py-4 px-6">80</td>
            <td className="py-4 px-6">A</td>
            <td className="py-4 px-6">
              <button
                type="button"
                class="mx-0.5 w-min py-2 px-3 text-xs font-medium text-center text-black border border-gray-400 bg-white rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Edit
              </button>
              <button
                type="button"
                class="mx-0.5 w-min py-2 px-3 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              2
            </th>
            <td className="py-4 px-6">Doe</td>
            <td className="py-4 px-6">Matematika</td>
            <td className="py-4 px-6">70</td>
            <td className="py-4 px-6">B</td>
            <td className="py-4 px-6">
              <button
                type="button"
                class="mx-0.5 w-min py-2 px-3 text-xs font-medium text-center text-black border border-gray-400 bg-white rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Edit
              </button>
              <button
                type="button"
                class="mx-0.5 w-min py-2 px-3 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              3
            </th>
            <td className="py-4 px-6">Frank</td>
            <td className="py-4 px-6">Kalkulus</td>
            <td className="py-4 px-6">60</td>
            <td className="py-4 px-6">C</td>
            <td className="py-4 px-6">
              <button
                type="button"
                class="mx-0.5 w-min py-2 px-3 text-xs font-medium text-center text-black border border-gray-400 bg-white rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Edit
              </button>
              <button
                type="button"
                class="mx-0.5 w-min py-2 px-3 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              4
            </th>
            <td className="py-4 px-6">Jason</td>
            <td className="py-4 px-6">Basis Data</td>
            <td className="py-4 px-6">90</td>
            <td className="py-4 px-6">A</td>
            <td className="py-4 px-6">
              <button
                type="button"
                class="mx-0.5 w-min py-2 px-3 text-xs font-medium text-center text-black border border-gray-400 bg-white rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Edit
              </button>
              <button
                type="button"
                class="mx-0.5 w-min py-2 px-3 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tugas10;
