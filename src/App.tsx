import Header from "./components/Header";

const App = () => {
  
  const getDataFromChild = (message: string): void => {
    console.log('Child:', message);
  }

  return (
    <>
      <Header getDataFromChild={getDataFromChild} />
    </>
  )
}

export default App;