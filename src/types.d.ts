declare module '*.jsx' {
  const component: any
  export default component
}

declare module 'virtual:pwa-register' {
  export function registerSW(opts?: any): () => void
}


