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

export default Header;