
export const setItem = (key: string, value: string) => {
    window.localStorage.setItem(key, value)
}

export const getItem = (key: string) => {
    window.localStorage.getItem(key)
}