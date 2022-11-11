import { NotFoundException } from '../utils/exceptions.mjs';
/**
 * For all other undefined routes, we return a 404 error
 */
export function unknownRoutesHandler (req, res, next) {
    next(new NotFoundException('The requested resource does not exist.'))
}