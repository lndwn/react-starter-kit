export const useVibration = (pattern: number | number[]) => {
  return [
    () => window.navigator.vibrate(pattern),
    () => window.navigator.vibrate(0),
  ] as [vibrate: () => void, cancel: () => void]
}
