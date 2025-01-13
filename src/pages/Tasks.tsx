import { AddTaskModal } from "@/components/module/taskCard/addTaskModal";
import TaskCard from "@/components/module/taskCard/TaskCard";
import { selectTasks } from "@/redux/features/taskSlice/taskSlice";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector(selectTasks);
  console.log(tasks);
  return (
    <div>
      <h2>tasks</h2>
      <AddTaskModal></AddTaskModal>
      <div>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
