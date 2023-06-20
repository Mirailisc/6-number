export const handleRandomNumber = () => {
  const randomSixDigitsNumber: number = Math.floor(100000 + Math.random() * 900000)
  return randomSixDigitsNumber
}
