import type { FilterType } from '../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const filters = [
    { key: 'all' as FilterType, label: 'Все' },
    { key: 'active' as FilterType, label: 'Активные' },
    { key: 'completed' as FilterType, label: 'Завершенные' },
  ];

  return (
    <div style={{ 
      display: 'flex', 
      gap: '10px',
      marginBottom: '20px'
    }}>
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          style={{
            padding: '8px 16px',
            border: '1px solid #ddd',
            backgroundColor: currentFilter === key ? '#4CAF50' : 'white',
            color: currentFilter === key ? 'white' : '#333',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};