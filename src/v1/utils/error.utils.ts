const errorHandler = (message: string, status: number, error: any) => {
    return {
        "message": message,
        "status": status,
        "error": error
    }
}

export default { errorHandler };