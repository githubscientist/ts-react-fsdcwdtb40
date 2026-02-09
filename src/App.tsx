type Props = {
  name: string;
}

const Header = ({ name }: Props) => {

  return (
    <>
      <h1>Hello { name.slice(0, 1).toUpperCase() + name.slice(1, ) }!</h1>
    </>
  )
}


const App = () => {
  let name: string = 'sathish';

  return (
    <>
      <Header name={name} />
    </>
  )
}

export default App;