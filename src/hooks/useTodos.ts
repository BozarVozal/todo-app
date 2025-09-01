import { useState, useCallback } from 'react';
import { Todo, FilterType } from '../types/todo';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Добавление новой задачи
  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(), // Уникальный ID на основе времени
      text: text.trim(),         // Текст задачи
      completed: false,          // По умолчанию не выполнена
      createdAt: new Date(),     // Текущая дата и время
    };
    
    // Добавляем задачу в список
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }, []);

  // Переключение статуса задачи
  const toggleTodo = useCallback((id: string) => {
    setTodos(prevTodos => 
      prevTodos.map(todo =>
        todo.id === id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
  }, []);

  // Удаление выполненных задач
  const clearCompleted = useCallback(() => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  }, []);

  // Фильтрация задач
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;    // Только невыполненные
      case 'completed':
        return todo.completed;     // Только выполненные
      default:
        return true;               // Все задачи
    }
  });

  // Подсчет активных задач
  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return {
    todos: filteredTodos,      // Отфильтрованный список
    addTodo,                   // Функция добавления
    toggleTodo,                // Функция переключения статуса
    clearCompleted,            // Функция очистки
    setFilter,                 // Функция установки фильтра
    activeTodosCount,          // Количество активных задач
    filter,                    // Текущий фильтр
  };
};