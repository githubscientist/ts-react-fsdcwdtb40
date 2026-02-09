import ChildComponent2 from "./ChildComponent2";

type Props = {
    name: string,
}

const ChildComponent1 = ({name}: Props) => {
  return (
      <>
          <ChildComponent2
            name={name}
          />
      </>
  )
}

export default ChildComponent1;