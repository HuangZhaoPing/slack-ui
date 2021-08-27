export declare interface MenuProvider {
  mode: string
  active: string
  activeBackgroundColor: string
  textColor: string
  activeTextColor: string
  updateActive (value: string): void
}

declare interface Window {
  $zIndex: number
}
