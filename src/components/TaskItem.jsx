import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { toggleTask, deleteTask } from '../store/tasksSlice';

export const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch(toggleTask(task));
  }, [dispatch, task]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(task.id));
  }, [dispatch, task.id]);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="w-5 h-5 accent-blue-500"
        />
        <span className={task.completed ? 'line-through text-gray-400' : ''}>
          {task.title}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 transition"
      >
        ✕
      </button>
    </motion.li>
  );
};