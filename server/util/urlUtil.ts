import TypeChecker from 'share/util/typeChecker'

const getOrElse = (
  queryParam?: string | string[],
  getIfUndefined = (): string => '',
  getIfArray = (arr: string[]): string => arr.join(','),
): string => {
  if (TypeChecker.isString(queryParam)) {
    return queryParam
  }
  if (TypeChecker.isArray(queryParam)) {
    return getIfArray(queryParam)
  }
  return getIfUndefined()
}

export const UrlUtil = { getOrElse }
