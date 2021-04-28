export interface Launch {
  id: string
  flight_number: number
  links: {
    patch: {
      small: string
      large: string
    }
    article: string
    webcast: string
  }
  success: boolean
  date_local: Date
}
