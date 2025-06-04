import { Task } from "../Task/Task";

const columnStyle = {
  flex: "1",
  border: "1px solid black",
};

export const Column = ({ loading, error, title, taskList }) => {
  return (
    <div style={columnStyle}>
      <p>{title}</p>
      {loading || error ? (
        <span>{error || "Loading..."}</span>
      ) : (
        <ul>
          {taskList.map((task) => (
            <li key={task.id}>
              <Task title={task.title} body={task.body} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
