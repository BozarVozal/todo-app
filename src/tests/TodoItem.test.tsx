import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; // ← ДОБАВЬТЕ этот импорт
import { TodoItem } from '../components/TodoItem';
import { Todo } from '../types/todo';

const mockTodo: Todo = {
  id: '1',
  text: 'Тестовая задача',
  completed: false,
  createdAt: new Date(),
};

test('отображает текст задачи', () => {
  render(<TodoItem todo={mockTodo} onToggle={() => {}} />);
  expect(screen.getByText('Тестовая задача')).toBeInTheDocument();
});

test('вызывает onToggle при клике на чекбокс', () => {
  const mockOnToggle = vi.fn();
  render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} />);
  
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  
  expect(mockOnToggle).toHaveBeenCalledWith('1');
});

test('показывает зачеркнутый текст для выполненной задачи', () => {
  const completedTodo: Todo = { ...mockTodo, completed: true };
  render(<TodoItem todo={completedTodo} onToggle={() => {}} />);
  
  const textElement = screen.getByText('Тестовая задача');
  expect(textElement).toHaveStyle('text-decoration: line-through');
});