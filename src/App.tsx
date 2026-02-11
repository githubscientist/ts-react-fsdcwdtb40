const App = () => {
  let recipes: string[] = [
    'Biryani',
    'Pulao',
    'Fried Rice',
    'Noodles',
    'Pasta',
  ];

  return (
    <>
      <h1>Recipes</h1>
      <ul>
        {
          recipes
            .map((recipe, index) => {
              return <li key={index}>{ recipe }</li>
            })
        }
      </ul>
    </>
  )
}

export default App;