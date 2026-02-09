type Props = {
  message: string,
}

const Header = ({ message }: Props) => {

  console.log('Parent:', message);  

  return (
    <>
      <h1>Hello, World!</h1>
    </>
  )
}

export default Header;