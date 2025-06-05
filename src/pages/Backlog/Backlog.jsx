import { useDataFetching } from "../../hooks/useDataFetching";

export const Backlog = () => {
  const [loading, taskList, error] = useDataFetching(
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
  );
  return (
    <div>
      {loading || error ? (
        <span>{error || "Loading..."}</span>
      ) : (
        <ul>
          {taskList.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
