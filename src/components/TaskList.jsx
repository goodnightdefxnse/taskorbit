import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);

  // Сортируем задачи по id для стабильности (useMemo предотвращает лишние сортировки)
  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => a.id - b.id);
  }, [tasks]);

  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {sortedTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </ul>
  );
};