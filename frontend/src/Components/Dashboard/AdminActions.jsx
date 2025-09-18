import React from "react";

const AdminActions = () => {
  return (
    <div className="flex gap-2 mt-3">
      <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
        Add
      </button>
      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        Update
      </button>
      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Delete
      </button>
      <button className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
        Create
      </button>
    </div>
  );
};

export default AdminActions;
