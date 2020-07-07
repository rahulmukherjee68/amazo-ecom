module.exports.sendError = (res, message, status) => {

    console.log(message);

    res.status(status).json({
        log: message.toString(),
        error: true,
        data: null
    });
};
module.exports.sendSuccess = (res, data) => {
    res.status(200).json({
        message: "success",
        error: false,
        data: data
    });
};
module.exports.sendPresent = (res, data) => {
    res.status(200).json({
        message: "Link already present Duplicate Entries",
        error: false,
        data: data
    });
};