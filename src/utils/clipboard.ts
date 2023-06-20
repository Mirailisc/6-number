export const copyNumberFromState = (number: number) => {
  navigator.clipboard.writeText(number.toString())
}
