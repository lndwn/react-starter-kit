import * as React from 'react'
export default 'svgurl'
const ReactComponent = React.forwardRef((props, ref) => (
  // @ts-expect-error
  <span ref={ref} {...props} />
))
ReactComponent.displayName = 'SvgrMock'

export { ReactComponent }
