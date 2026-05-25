import { useEffect, useState } from "react";
import API from "../Api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await API.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>📌 My Tasks</h1>

        <div style={styles.inputBox}>
          <input
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new task..."
          />
          <button style={styles.addBtn} onClick={addTask}>
            Add
          </button>
        </div>

        {tasks.map((task) => (
          <div key={task._id} style={styles.task}>
            <span>{task.title}</span>
            <button style={styles.deleteBtn} onClick={() => deleteTask(task._id)}>
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    padding: "40px",
  },
  card: {
    width: "500px",
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  addBtn: {
    padding: "12px 16px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    marginBottom: "10px",
    background: "#f9fafb",
    borderRadius: "8px",
  },
  deleteBtn: {
    background: "#ef4444",
    border: "none",
    color: "white",
    padding: "5px 10px",
    borderRadius: "6px",
  },
};