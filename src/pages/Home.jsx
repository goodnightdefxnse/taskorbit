import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/tasksSlice';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';

export const Home = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="text-center">Загрузка...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-500">Ошибка: {error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">TaskOrbit</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};