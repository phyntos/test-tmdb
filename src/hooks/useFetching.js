import {useCallback, useState} from "react";

export const useFetching = (callback, deps) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const newCallback = useCallback( fetching, [...deps])

    return [newCallback, isLoading, error]
}