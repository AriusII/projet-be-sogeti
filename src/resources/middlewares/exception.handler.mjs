/**
 * Middleware of global error management
 *
 * @param err - Express error (can be ours or another)
 * @param req - The initial request
 * @param res - The response object
 * @param next - Allows to pass to the next middleware if existing
 * 
 */
export function exceptionHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }

    /**
    * If it's the case, we know it's our error
    */
    if (err instanceof Error) {
        return res.status(500).json({
            message: err.message,
            stack: err.stack,
        });
    }

    /**
     * If it's not the case, we don't know what it is
     * We send a generic error
     */
    return res.status(500).json({
        message: 'Internal server error',
    })
}