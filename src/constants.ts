interface Config {
  apiEndpoint: string
  apiKey: string
}

declare const CONFIG: Config

const _CONFIG = CONFIG

export { _CONFIG as CONFIG }
