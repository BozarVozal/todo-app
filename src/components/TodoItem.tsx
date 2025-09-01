import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '10px',
      border: '1px solid #ddd',
      marginBottom: '5px',
      borderRadius: '4px'
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ 
          marginRight: '10px',
          width: '20px',
          height: '20px'
        }}
      />
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#000',
        fontSize: '16px'
      }}>
        {todo.text}
      </span>
    </div>
  );
};