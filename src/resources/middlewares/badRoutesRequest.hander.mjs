import { BadRequestException } from '../utils/exceptions.mjs';
/**
 * For all bad requests, we return a 400 error
 * (for example, if the user tries to access a route with a bad method)
 */
export function badRoutesRequestHandler (req, res, next) {
    next(new BadRequestException('The requested resource from those parameters does not exist.'))
}