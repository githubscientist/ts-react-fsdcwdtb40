// component: React components are reusable pieces of UI (either one or more than one html elements)
// components can be created in two ways:
// 1. functional component
// 2. class component

// functional component: App
import { Component } from "react";
class App extends Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default App;