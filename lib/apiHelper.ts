export interface ApiError {
    statusCode: number
    message: string
}

// object 판별
function isRecord(x: unknown): x is Record<string, unknown> {
    return typeof x === 'object' && x !== null
}

export function isApiError(error: unknown): error is ApiError {
    if (!isRecord(error)) {
        return false
    }
    const statusCode = (error as Record<string, unknown>).statusCode
    const message = (error as Record<string, unknown>).message

    return typeof statusCode === 'number' && typeof message === 'string'
}

export function getErrorMessage(
    error: unknown,
    fallback = '알 수 없는 오류가 발생했습니다.'
): string {
    // 1. 우리 스펙
    if (isApiError(error)) {
        return error.message
    }

    // 2. runtime error
    if (error instanceof Error) {
        return error.message
    }

    // 3. 문자열 에러
    if (typeof error === 'string') {
        return error
    }

    return fallback
}
