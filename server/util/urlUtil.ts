import { isString, isArray } from 'lodash'

const getOrElse = (
  queryParam?: string | string[],
  getIfUndefined = (): string => '',
  getIfArray = (arr: string[]): string => arr.join(','),
): string => {
  if (isString(queryParam)) {
    return queryParam
  }
  if (isArray(queryParam)) {
    return getIfArray(queryParam)
  }
  return getIfUndefined()
}

export const UrlUtil = { getOrElse }
