const buildStringByQueryParams = <T>(queryParams: T): string =>
    Object.entries(queryParams).reduce((url, [key, value]) => `${ url }${ key }=${ value }&`, '')

export default buildStringByQueryParams