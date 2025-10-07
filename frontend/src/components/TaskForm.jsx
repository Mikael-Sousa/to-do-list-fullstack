import './Taskform.css'

function TaskForm({task, setTask, onAdd}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(task);
        setTask("");
      }}
    >
      <input
        type="text"
        placeholder="task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button className="add-task-btn" type="submit">
        +
      </button>
    </form>
  );
}

export default TaskForm;
