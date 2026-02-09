type Props = {
  getDataFromChild: (message: string) => void,
}

const Header = ({ getDataFromChild }: Props) => {

    let message: string = 'hi, how are you?'; 
    
    getDataFromChild(message);

  return (
    <>
      <h1>Hello, World!</h1>
    </>
  )
}

export default Header;