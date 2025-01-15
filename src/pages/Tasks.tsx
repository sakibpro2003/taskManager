import { AddTaskModal } from "@/components/module/taskCard/addTaskModal";
import TaskCard from "@/components/module/taskCard/TaskCard";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { selectTasks } from "@/redux/features/taskSlice/taskSlice";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector(selectTasks);
  console.log(tasks);
  // console.log(tasks.DueDate)

  return (
    <div>
      <h2>tasks</h2>
      <div className="bg-red-400">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
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
