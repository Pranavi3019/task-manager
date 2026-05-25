import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import CreateTaskModal from "../components/CreateTaskModal";
import TaskChart from "../components/TaskChart";
import TaskCard from "../components/TaskCard";
import Sidebar from "../components/Sidebar";

import API from "../Api";

function Dashboard() {

  const [showModal, setShowModal] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [tasks, setTasks] = useState([]);

  const company =
    localStorage.getItem("company");

  // Fetch Tasks

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks = async () => {

    try {

      const res = await API.get("/tasks");

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className={darkMode ? "dark flex" : "flex"}>

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div
        className={`flex-1 min-h-screen p-6 transition-all duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
            : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        }`}
      >

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dashboard
            </h1>

            <p className="text-slate-400 mt-1">
              Welcome to Ethara.AI Workspace
            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* Dark Mode Button */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gradient-to-r from-slate-700 to-slate-900 text-white px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              {darkMode ? "Light" : "Dark"}
            </button>

            {/* Admin Badge */}

            <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-white/20 dark:border-slate-700 text-black dark:text-white px-4 py-2 rounded-xl shadow-lg">
              Admin
            </div>

          </div>

        </div>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Total Tasks */}

          <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-white/20 dark:border-slate-700 dark:text-white p-5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">

            <h2 className="text-gray-500 dark:text-gray-300">
              Total Tasks
            </h2>

            <p className="text-3xl font-bold mt-2">
              {tasks.length}
            </p>

          </div>

          {/* Completed */}

          <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-white/20 dark:border-slate-700 dark:text-white p-5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">

            <h2 className="text-gray-500 dark:text-gray-300">
              Completed
            </h2>

            <p className="text-3xl font-bold text-green-500 mt-2">

              {
                tasks.filter(
                  (task) =>
                    task.status === "Completed"
                ).length
              }

            </p>

          </div>

          {/* Pending */}

          <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-white/20 dark:border-slate-700 dark:text-white p-5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">

            <h2 className="text-gray-500 dark:text-gray-300">
              Pending
            </h2>

            <p className="text-3xl font-bold text-yellow-500 mt-2">

              {
                tasks.filter(
                  (task) =>
                    task.status === "Pending"
                ).length
              }

            </p>

          </div>

          {/* Overdue */}

          <div className="bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-white/20 dark:border-slate-700 dark:text-white p-5 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">

            <h2 className="text-gray-500 dark:text-gray-300">
              Overdue
            </h2>

            <p className="text-3xl font-bold text-red-500 mt-2">
              4
            </p>

          </div>

        </div>

        {/* Search & Filters */}

        <div className="mt-10 bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg border border-white/20 dark:border-slate-700 dark:text-white p-5 rounded-2xl shadow-lg">

          <div className="flex flex-col md:flex-row gap-4 justify-between">

            {/* Search */}

            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border border-slate-300 dark:border-slate-700 dark:text-white p-3 rounded-xl w-full md:w-[300px]"
            />

            {/* Filters */}

            <div className="flex gap-4">

              <select className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border border-slate-300 dark:border-slate-700 dark:text-white p-3 rounded-xl">

                <option>Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>

              </select>

              <select className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg border border-slate-300 dark:border-slate-700 dark:text-white p-3 rounded-xl">

                <option>Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

              </select>

            </div>

          </div>

        </div>

        {/* Charts */}

        <div className="mt-10">

          <TaskChart />

        </div>

        {/* Recent Tasks */}

        <div className="mt-10">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-2xl font-bold dark:text-white">
              Recent Tasks
            </h2>

            {/* Create Task Button */}

            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              Create Task
            </button>

          </div>

          {/* Task Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <AnimatePresence>

              {tasks.map((task) => (

                <TaskCard
                  key={task._id}
                  title={task.title}
                  status={task.status}
                  priority={task.priority}
                  dueDate={task.dueDate}

                  onDelete={async () => {

                    try {

                      await API.delete(
                        `/tasks/${task._id}`
                      );

                      setTasks(
                        tasks.filter(
                          (t) =>
                            t._id !== task._id
                        )
                      );

                    } catch (error) {

                      console.log(error);

                    }

                  }}

                />

              ))}

            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* Create Task Modal */}

      {showModal && (

        <CreateTaskModal

          closeModal={() =>
            setShowModal(false)
          }

          addTask={async (task) => {

            try {

              console.log(
                "Sending Task:",
                task
              );

              const res = await API.post(
                "/tasks",
                task
              );

              console.log(
                "Response:",
                res.data
              );

              setTasks((prevTasks) => [
                ...prevTasks,
                res.data
              ]);

              setShowModal(false);

            } catch (error) {

              console.log(
                "FULL ERROR:",
                error.response?.data ||
                error.message
              );

              alert("Task not added");

            }

          }}

        />

      )}

    </div>

  );
}

export default Dashboard;