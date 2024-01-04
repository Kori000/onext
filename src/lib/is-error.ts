export const isRequestError = (error: Error) => {
  return error.message.startsWith(`Request failed with status code`)
}

export const pickStatusCode = (error: Error) => {
  return parseInt(error.message.split(' ').pop() || '')
}
