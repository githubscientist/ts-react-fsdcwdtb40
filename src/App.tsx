type Props = {
  name: string,
  age: number
}

const Header = ({ name, age }: Props) => {

  return (
    <>
      <h1>Hello {name.slice(0, 1).toUpperCase() + name.slice(1,)}! You're { age} years old</h1>
    </>
  )
}


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