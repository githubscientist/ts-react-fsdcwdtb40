import Header from "./components/Header";

const App = () => {

  let message = 'hi, how are you?';

  return (
    <>
      <Header message={ message } />
    </>
  )
}

export default App;