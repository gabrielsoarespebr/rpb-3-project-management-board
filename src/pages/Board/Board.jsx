import { Column } from "../../components/Column/Column";
import { useDataFetching } from "../../hooks/useDataFetching";

const boardStyle = {
  display: "flex",
};

const columnList = [
  { id: 1, title: "To Do" },
  { id: 2, title: "In Progress" },
  { id: 3, title: "Review" },
  { id: 4, title: "Done" },
];

export const Board = () => {
  const [loading, taskList, error] = useDataFetching(
    "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
  );

  return (
    <div style={boardStyle}>
      {columnList.map((col) => (
        <Column
          key={col.id}
          title={col.title}
          loading={loading}
          error={error}
          taskList={taskList.filter((task) => task.lane === col.id)}
        />
      ))}
    </div>
  );
};
