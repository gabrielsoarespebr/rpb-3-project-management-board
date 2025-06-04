import { useEffect } from "react";
import { Column } from "../../components/Column/Column";
import { useState } from "react";

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
  const [loading, setLoading] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks"
        );

        const data = await response.json();

        if (data) {
          setTaskList(data);
        }

        console.log(taskList);
      } catch (e) {
        setError(e.message);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

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
