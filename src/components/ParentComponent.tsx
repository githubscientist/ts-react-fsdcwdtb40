import ChildComponent1 from "./ChildComponent1";

type Props = {
    name: string,
}

const ParentComponent = ({name}: Props) => {
  return (
      <>
          <ChildComponent1
            name={name}
          />
      </>
  )
}

export default ParentComponent;