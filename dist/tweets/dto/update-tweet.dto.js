"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTweetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tweet_dto_1 = require("./create-tweet.dto");
class UpdateTweetDto extends (0, mapped_types_1.PartialType)(create_tweet_dto_1.CreateTweetDto) {
}
exports.UpdateTweetDto = UpdateTweetDto;
//# sourceMappingURL=update-tweet.dto.js.map