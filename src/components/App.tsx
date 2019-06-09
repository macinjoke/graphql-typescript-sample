import React from 'react'
import gql from 'graphql-tag'
import { print as printGql } from 'graphql/language/printer'

import { CONFIG } from '../constants'

const query = gql`
  {
    currentUser {
      account
      realName
    }
    budget {
      cost
    }
  }
`
console.log(query)
interface Props {
  hoge: string
}

class App extends React.Component<Props> {
  public render() {
    const { hoge } = this.props
    console.log(hoge)
    return (
      <div>
        <h1>GraphQL TypeScript Sample</h1>
        <button onClick={this.onClick}>query</button>
      </div>
    )
  }

  private onClick = async () => {
    const res = await fetch(CONFIG.apiEndpoint, {
      method: 'POST', // [required]
      redirect: 'follow',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${CONFIG.apiKey}`, // [required]
        'Content-Type': 'application/json', // [required]
        Accept: 'application/json', // [required]
        'User-Agent': 'test', // [recommended]
      },
      body: JSON.stringify({
        query: printGql(query),
        variables: {},
      }),
    })
    const data = await res.json()
    console.log(data)
  }
}

export default App
