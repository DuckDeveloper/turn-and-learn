const getResponse = async <T>(apiUrl: string, params?: RequestInit): Promise<T> => {
    const response = await fetch(apiUrl, params)
    const data = await response.json()

    if (!response.ok) {
        if (data.error) console.log(data.error)
        throw new Error(data.message)
    }

    return data
}

export default getResponse
