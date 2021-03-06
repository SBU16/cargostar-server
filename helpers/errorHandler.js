"use strict";

import logger from "../configurations/logger.js";

export function registerErrorListener() {
    process.on("uncaughtException", onError);

    process.on("unhandledRejection", onError);
}

function onError(error) {
    logger.error(error.message);
    return process.exit(1);
}
