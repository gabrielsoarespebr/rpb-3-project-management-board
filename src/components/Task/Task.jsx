const taskTitleStyle = { fontWeight: "bold" };

export const Task = ({ title, body }) => {
  return (
    <div>
      <p style={taskTitleStyle}>{title}</p>
      <p>{body}</p>
    </div>
  );
};
