"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const makeAccountRepository_1 = require("../../../factories/makeAccountRepository");
const AccountDepositUseCase_1 = __importDefault(require("./AccountDepositUseCase"));
const AccountTransferUseCase_1 = __importDefault(require("./AccountTransferUseCase"));
const AccountWithdrawUseCase_1 = __importDefault(require("./AccountWithdrawUseCase"));
class PostEventTypeDepositController {
    async handle(req, res) {
        const { type, origin, amount, destination } = req.body;
        let postEventResponse;
        if (type === "deposit") {
            postEventResponse = await new AccountDepositUseCase_1.default((0, makeAccountRepository_1.makeAccountRepository)()).execute({
                destination, amount
            });
        }
        else if (type === "withdraw") {
            postEventResponse = await new AccountWithdrawUseCase_1.default((0, makeAccountRepository_1.makeAccountRepository)()).execute({
                origin, amount
            });
        }
        else if (type === "transfer") {
            postEventResponse = await new AccountTransferUseCase_1.default((0, makeAccountRepository_1.makeAccountRepository)()).execute({
                origin, amount, destination
            });
        }
        return res.status(postEventResponse.httpStatusCodeResponse).json(postEventResponse.message);
    }
}
exports.default = new PostEventTypeDepositController();
