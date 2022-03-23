import FlexForm from '@kcdevclub/flex-react-form';
// css
import './App.css';

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <header
          style={{
            backgroundColor: '#2fd4c6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            borderRadius: '15px',
            margin: '10px',
            border: '1px solid #25a89d',
          }}
        >
          <div>
            <h2>Flex React Form</h2>
          </div>
        </header>
        <div
          style={{
            margin: '30px',
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <FlexForm />
        </div>
      </div>
    </div>
  );
}

export default App;
