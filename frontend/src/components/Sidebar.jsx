import {
  FaHome,
  FaTasks,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

function Sidebar() {

  return (

    <div className="w-64 min-h-screen bg-slate-950 text-white p-6">

      {/* Logo */}

      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
        TaskFlow
      </h1>

      {/* Menu */}

      <div className="space-y-4">

        {/* Dashboard */}

        <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl shadow-lg cursor-pointer">

          <FaHome />

          <span>Dashboard</span>

        </div>

        {/* Tasks */}

        <div className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl transition-all duration-300 cursor-pointer">

          <FaTasks />

          <span>Tasks</span>

        </div>

        {/* Analytics */}

        <div className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl transition-all duration-300 cursor-pointer">

          <FaChartBar />

          <span>Analytics</span>

        </div>

        {/* Settings */}

        <div className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-xl transition-all duration-300 cursor-pointer">

          <FaCog />

          <span>Settings</span>

        </div>

      </div>

    </div>

  );
}

export default Sidebar;