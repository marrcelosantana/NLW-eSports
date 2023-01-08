interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <button>{title}</button>;
}

function App() {
  return (
    <div>
      <Button title="Send 1" />
      <Button title="Send 2" />
    </div>
  );
}

export default App;
