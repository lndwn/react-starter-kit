//  @ts-nocheck
const SVGRTemplate = (
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) => {
  const TSTemplate = template.smart({ plugins: ['typescript'] })
  return TSTemplate.ast`
    import React from 'react';
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `
}

export { SVGRTemplate }
