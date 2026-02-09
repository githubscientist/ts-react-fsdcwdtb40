import ChildComponent3 from "./ChildComponent3";

type Props = {
    name: string,
}

const ChildComponent2 = ({name}: Props) => {
  return (
      <>
          <ChildComponent3
            name={name}
          />
      </>   
  )
}

export default ChildComponent2;