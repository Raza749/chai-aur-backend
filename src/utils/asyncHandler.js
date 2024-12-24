

const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 5000).json({
            success: false,
            message: error.message
        });
    }
};


export default asyncHandler;






// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).
//             catch((error) => next(error));
//     };
// }