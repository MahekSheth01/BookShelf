import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8 text-indigo-700 text-center">📚 Add New Book</h2>

      <form className="flex flex-wrap gap-6 w-full">
        {/* Book Name */}
        <div className="flex flex-col w-full md:w-[18%]">
          <label className="mb-1 font-medium text-gray-700">Book Name</label>
          <input
            type="text"
            placeholder="Book Name"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Book Title */}
        <div className="flex flex-col w-full md:w-[18%]">
          <label className="mb-1 font-medium text-gray-700">Book Title</label>
          <input
            type="text"
            placeholder="Book Title"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Author */}
        <div className="flex flex-col w-full md:w-[18%]">
          <label className="mb-1 font-medium text-gray-700">Author</label>
          <input
            type="text"
            placeholder="Book Author"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Selling Price */}
        <div className="flex flex-col w-full md:w-[18%]">
          <label className="mb-1 font-medium text-gray-700">Selling Price</label>
          <input
            type="text"
            placeholder="Selling Price"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Publish Date */}
        <div className="flex flex-col w-full md:w-[18%]">
          <label className="mb-1 font-medium text-gray-700">Publish Date</label>
          <input
            type="date"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-end w-full md:w-[10%]">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-semibold"
          >
            Add
          </button>
        </div>
      </form>

       {/* Book Table */}
<div className="w-full mt-10">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">📄 Book List</h3>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-indigo-600 text-white">
        <tr>
          <th className="text-left py-3 px-4">Book Name</th>
          <th className="text-left py-3 px-4">Book Title</th>
          <th className="text-left py-3 px-4">Author</th>
          <th className="text-left py-3 px-4">Selling Price</th>
          <th className="text-left py-3 px-4">Publish Date</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b hover:bg-gray-100 transition">
          <td className="py-3 px-4">Book Name</td>
          <td className="py-3 px-4">Book Title</td>
          <td className="py-3 px-4">Author</td>
          <td className="py-3 px-4">100</td>
          <td className="py-3 px-4">2022-01-01</td>
        </tr>
        {/* Add more rows here if needed */}
      </tbody>
    </table>
  </div>
</div>


    </div>
  );
};

export default Home;
