export interface Launch {
  id: string
  name: string
  links: {
    patch: {
      small: string
    }
  }
  date_utc: string
  details: string
}

export interface PagedLaunch {
  docs: Launch[]
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage?: number
  page: number
  pagingCounter: number
  prevPage?: number
  totalDocs: number
  totalPages: number
}
