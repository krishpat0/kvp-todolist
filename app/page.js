"use client";
import React, { useState } from "react";

React;

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const SubmitHandler = (e) => {
    console.log("Submit Successfully");
    e.preventDefault();

    setMainTask([...mainTask, { title, desc }]);
    // console.log(title);
    // console.log(desc);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  // to show data
  let renderTask = <h2>No Task Available</h2>;

  // condtion
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="bg-black text-white p-5 text-4xl font-bold text-center">
            KVP To-Do List
          </h1>
          <form onSubmit={SubmitHandler}>
            <input
              className="text-2xl border-zinc-800 border-2 rounded m-5 px-4 py-2"
              type="text"
              placeholder="Enter Task here..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              className="text-2xl border-zinc-800 border-2 rounded m-5 px-4 py-2"
              type="text"
              placeholder="Description"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
              Add Task
            </button>
          </form>
        </div>

        <hr />
        <div className="bg-slate-300 p-8 output">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
