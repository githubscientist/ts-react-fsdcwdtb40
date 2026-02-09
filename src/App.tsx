import ParentComponent from "./components/ParentComponent";

const App = () => {

  const name: string = 'Krish';

  return (
    <>
      <ParentComponent
        name={name}
      />
    </>
  )
}

export default App;