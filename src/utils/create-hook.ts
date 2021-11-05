import { forwardRef } from 'react'

export function createHook<
  Props = unknown | unknown[],
  ProvidedProps = unknown,
  Ref = unknown
>(hook: (props: Props) => ProvidedProps) {
  const WithHook = (
    props: Props & { children: (props: ProvidedProps) => JSX.Element }
  ) => props.children(hook(props))

  const WithRefHook = forwardRef<
    Ref,
    Props & { children: (props: ProvidedProps) => JSX.Element }
  >((props, ref) => props.children(hook({ ref, ...props })))

  return [hook, WithHook, WithRefHook] as const
}
