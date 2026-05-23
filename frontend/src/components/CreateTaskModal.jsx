import { useState } from "react";

function CreateTaskModal({
  closeModal,
  addTask,
}) {

  const [title, setTitle] = useState("");

  const [status, setStatus] =
    useState("Pending");

  const [priority, setPriority] =
    useState("Medium");

  const [dueDate, setDueDate] =
    useState("");

  // Submit Function

  const handleSubmit = async (e) => {

    e.preventDefault();

    const taskData = {

      title,
      status,
      priority,
      dueDate,

    };

    console.log(taskData);

    await addTask(taskData);

  };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl w-full max-w-md shadow-2xl">

        {/* Title */}

        <h2 className="text-2xl font-bold mb-5 dark:text-white">
          Create Task
        </h2>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* Task Title */}

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
            className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:text-white"
          />

          {/* Status */}

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:text-white"
          >

            <option>Pending</option>

            <option>In Progress</option>

            <option>Completed</option>

          </select>

          {/* Priority */}

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:text-white"
          >

            <option>High</option>

            <option>Medium</option>

            <option>Low</option>

          </select>

          {/* Due Date */}

          <input
            type="text"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
            required
            className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:text-white"
          />

          {/* Buttons */}

          <div className="flex justify-end gap-3 pt-3">

            {/* Cancel */}

            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 transition-all duration-300"
            >
              Cancel
            </button>

            {/* Add Task */}

            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-105 transition-all duration-300"
            >
              Add Task
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default CreateTaskModal;