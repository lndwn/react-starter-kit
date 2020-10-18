type SvgrComponent = React.FunctionComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const value: string
  export default value

  export const ReactComponent: SvgrComponent
}
