import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; // ← ДОБАВЬТЕ этот импорт
import { TodoInput } from '../components/TodoInput';

test('вызывает onAdd при отправке формы с текстом', () => {
  const mockOnAdd = vi.fn();
  render(<TodoInput onAdd={mockOnAdd} />);
  
  const input = screen.getByPlaceholderText('Что нужно сделать?');
  const button = screen.getByText('Добавить');
  
  fireEvent.change(input, { target: { value: 'Новая задача' } });
  fireEvent.click(button);
  
  expect(mockOnAdd).toHaveBeenCalledWith('Новая задача');
});

test('не вызывает onAdd при пустом поле ввода', () => {
  const mockOnAdd = vi.fn();
  render(<TodoInput onAdd={mockOnAdd} />);
  
  const button = screen.getByText('Добавить');
  fireEvent.click(button);
  
  expect(mockOnAdd).not.toHaveBeenCalled();
});

test('очищает поле ввода после добавления', () => {
  const mockOnAdd = vi.fn();
  render(<TodoInput onAdd={mockOnAdd} />);
  
  const input = screen.getByPlaceholderText('Что нужно сделать?');
  const button = screen.getByText('Добавить');
  
  fireEvent.change(input, { target: { value: 'Новая задача' } });
  fireEvent.click(button);
  
  expect(input).toHaveValue('');
});