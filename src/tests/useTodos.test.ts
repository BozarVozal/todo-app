import { renderHook, act } from '@testing-library/react';
import { useTodos } from '../hooks/useTodos';

describe('useTodos hook', () => {
  it('добавляет новую задачу', () => {
    const { result } = renderHook(() => useTodos());
    
    act(() => {
      result.current.addTodo('Новая задача');
    });
    
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Новая задача');
    expect(result.current.todos[0].completed).toBe(false);
  });

  it('переключает статус задачи', () => {
    const { result } = renderHook(() => useTodos());
    
    act(() => {
      result.current.addTodo('Тестовая задача');
    });
    
    const taskId = result.current.todos[0].id;
    
    act(() => {
      result.current.toggleTodo(taskId);
    });
    
    expect(result.current.todos[0].completed).toBe(true);
  });
});