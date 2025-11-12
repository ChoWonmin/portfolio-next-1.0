export {}

declare global {
    interface Window {
        Kakao: {
            init: (key: string) => void
            isInitialized: () => boolean
            Auth: {
                authorize: (options: {
                    redirectUri: string,
                    prompt?: string,
                    scope?: string
                }) => void
            }
        }
    }
}