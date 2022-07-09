import { v4 as uuidv4 } from 'uuid';
let TodoData =  [
        {
            id: uuidv4(),
          taskName: "Task 1",
          level: "Medium",
        },
        {
            id: uuidv4(),
          taskName: "Task 2",
          level: "Medium",
        },
        {
            id: uuidv4(),
          taskName: "Task 3",
          level: "High",
        },
        {
            id: uuidv4(),
          taskName: "Task 4",
          level: "Small",
        }
      ]
export default TodoData;