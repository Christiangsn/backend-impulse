class IServerError extends Error {
    constructor (stack: unknown) {
      super('Internal Server Error')
      this.name = 'IServerError'
      this.stack = String(stack)
    }
  }
  
export { IServerError }