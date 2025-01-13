import { RootState } from "./../../store";
import { ITask } from "@/types/type";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "8uKp6J3ewh7dhfX7VG-hO",
      isComplete: false,
      title: "fsdfas",
      description: " asdasdf",
      dueDate: "2025-01-21T18:00:00.000Z",
      priority: "Medium",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isComplete: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toogleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action, "from pappp");
      state.tasks.forEach((task) => {
        if (task.id == action.payload) {
          console.log("ok");
          task.isComplete = !task.isComplete;
        }
      });
    },
    deleteTask: (state, action: PayloadAction<string>)=>{
      state.tasks = state.tasks.filter((task)=>task.id != action.payload)
    }
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const { addTask, toogleCompleteState,deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
