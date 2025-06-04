import { Task } from "../Task/Task";

const columnStyle = {
  flex: "1",
  border: "1px solid black",
};

const taskListStyle = {
  listStyle: "none",
  padding: 0,
  margin: ".5rem",
};

const taskCardStyle = {
  backgroundColor: "#E2E2E2",
  padding: ".5rem",
  marginBottom: "1rem",
  borderRadius: ".4rem",
};

export const Column = ({ loading, error, title, taskList }) => {
  return (
    <div style={columnStyle}>
      <p>{title}</p>
      {loading || error ? (
        <span>{error || "Loading..."}</span>
      ) : (
        <ul style={taskListStyle}>
          {taskList.map((task) => (
            <li key={task.id} style={taskCardStyle}>
              <Task title={task.title} body={task.body} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
