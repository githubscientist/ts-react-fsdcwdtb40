import Header from "./components/Header";

const App = () => {
  let name: string = 'sathish';
  let age: number = 35;

  return (
    <>
      <Header name={name} age={age} />
    </>
  )
}

export default App;