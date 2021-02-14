import React from "react"

interface IUseHttp {
  isLoading: boolean
  request: AnyFunction
  error: Error | null
  clearError: AnyFunction
}

export const useHttp: () => IUseHttp = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [httpError, setHttpError] = React.useState(null)

  const request = React.useCallback(
    async (
      url,
      method = "GET",
      initialBody: string | null = null,
      initialHeaders = {}
    ) => {
      let body = initialBody
      const headers = initialHeaders

      try {
        if (body) {
          body = JSON.stringify(body)
          headers["Content-Type"] = "application/json"
        }

        const response = await fetch(url, { method, body, headers })
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так")
        }

        setIsLoading(false)

        return data
      } catch (error) {
        setIsLoading(false)
        setHttpError(error.message)
        throw error
      }
    },
    []
  )

  const clearError = React.useCallback(() => setHttpError(null), [])

  return { isLoading, request, error: httpError, clearError }
}
