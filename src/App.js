import './App.css';

function Helloworld(props) {
  return (
    <div id={props.color}>{props.mytext}</div>
  )
}

function App() {
  return (
    <div>
      este sera mi primer export en react: 
      <Helloworld mytext=" hola a todos" color="red"/> 
      <Helloworld mytext=" soy julian" color="hola"/> 
      <Helloworld mytext=" y estoy aprendiendo React"/> 
    </div>
  );
}

export default App;
