const useUnMount = (fn) => {
  useEffect(
    () => () => {
      fn()
    },
    []
  )
}
export default useUnMount
