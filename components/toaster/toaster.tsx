import Toast from 'react-native-root-toast'

export function Toaster(text, theme) {
  let bgColor = "black", txtColor = "white"

  if (theme === "warning") {
    bgColor = "red"
    txtColor = "white"
  }

  Toast.show(text, {
    duration: 2000,
    backgroundColor: bgColor,
    textColor: txtColor,
    shadowColor: "black"
  })
}