import { TaskListItem } from '../../components/TaskListItem/TaskListItem';
import styles from './Task.module.css';

const Task = () => {
  return (
    <div className={styles.containerTask}>
      <p className={styles.task}>Task</p>
      <TaskListItem />
    </div>
  );
};

export default Task;
