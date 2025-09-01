interface TodoCounterProps {
  count: number;
}

export const TodoCounter: React.FC<TodoCounterProps> = ({ count }) => {
  return (
    <div style={{ 
      marginBottom: '20px',
      fontSize: '16px',
      color: '#666'
    }}>
      Осталось задач: <strong>{count}</strong>
    </div>
  );
};