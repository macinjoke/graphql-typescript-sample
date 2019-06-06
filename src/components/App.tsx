import React from 'react'
import gql from 'graphql-tag';

console.log(gql)
const a = gql`
  query {
    foo
  }
`
console.log(a)
interface Props {
  hoge: string
}

class App extends React.Component<Props> {
  public render() {
    const { hoge } = this.props
    console.log(hoge)
    return <div>
      <h1>GraphQL TypeScript Sample</h1>
    </div>
  }
}

export default App
