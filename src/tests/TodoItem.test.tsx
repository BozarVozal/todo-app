import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; // ← исправлено на vitest
import { TodoItem } from '../components/TodoItem';
import type { Todo } from '../types/todo';

const mockTodo: Todo = {
  id: '1',
  text: 'Тестовая задача', // ← исправлена опечатка
  completed: false,
  createdAt: new Date() // ← убрана лишняя точка с запятой
};

test('отображает текст задачи', () => {
  render(<TodoItem todo={mockTodo} onToggle={() => {}} />); // ← исправлены скобки
  expect(screen.getByText('Тестовая задача')).toBeTruthy(); // ← изменено на toBeTruthy
});

test('вызывает onToggle при клике на чекбокс', () => {
  const mockOnToggle = vi.fn(); // ← исправлено на fn()
  render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} />); // ← исправлены скобки

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(mockOnToggle).toHaveBeenCalledWith('1');
});

test('показывает зачеркнутый текст для выполненной задачи', () => {
  const completedTodo: Todo = { ...mockTodo, completed: true };
  render(<TodoItem todo={completedTodo} onToggle={() => {}} />); // ← исправлены скобки

  const textElement = screen.getByText('Тестовая задача');
  expect(textElement.style.textDecoration).toBe('line-through'); // ← изменено на проверку стиля
});