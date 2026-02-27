import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/tasksSlice';

export const TaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (title.trim()) {
        dispatch(addTask(title));
        setTitle('');
      }
    },
    [dispatch, title]
  );

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Новая задача..."
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Добавить
      </button>
    </form>
  );
};