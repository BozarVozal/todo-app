import { useTodos } from '../hooks/useTodos';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';
import { TodoCounter } from './TodoCounter';

export const TodoApp: React.FC = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    clearCompleted,
    setFilter,
    activeTodosCount,
    filter,
  } = useTodos();

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px'
      }}>
        📝 ToDo App
      </h1>
      
      <TodoInput onAdd={addTodo} />
      <TodoCounter count={activeTodosCount} />
      <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
      <TodoList todos={todos} onToggle={toggleTodo} />
      
      <button 
        onClick={clearCompleted}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Очистить завершенные
      </button>
    </div>
  );
};