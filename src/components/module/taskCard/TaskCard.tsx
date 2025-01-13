import { ITask } from "@/types/type";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/redux/hook";
import {
  deleteTask,
  toogleCompleteState,
} from "@/redux/features/taskSlice/taskSlice";

interface IProps {
  task: ITask;
}
const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border-2 border-red flex justify-between w-full">
      <div className="">
        <div
          className={cn("rounded-full w-6", {
            "bg-green-500": task.priority == "Low",
            "bg-yellow-500": task.priority == "Medium",
            "bg-red-500": task.priority == "High",
          })}
        >
          dkf
        </div>
        <h5>{task.title}</h5>
        <p>{task.description}</p>
      </div>

      <div className="">
        <Button onClick={() => dispatch(deleteTask(task.id))}>X</Button>
        <Checkbox onClick={() => dispatch(toogleCompleteState(task.id))} />
      </div>
    </div>
  );
};

export default TaskCard;
