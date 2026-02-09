type Props = {
    name: string,
}

const ChildComponent3 = ({name}: Props) => {
  return (
      <>
          <h1>Hello, {name}!</h1>
      </>
  )
}

export default ChildComponent3;