import { motion } from "framer-motion";
function TaskCard({ title, status, priority, dueDate, onDelete }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow"
    >
      <h2 className="font-bold">{title}</h2>

      <p className="text-sm text-gray-500">{status}</p>
      <p className="text-sm">{priority}</p>
      <p className="text-sm">{dueDate}</p>

      <button
        onClick={onDelete}
        className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </motion.div>
  );
}

export default TaskCard;