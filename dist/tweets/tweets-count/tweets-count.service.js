"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetsCountService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const tweet_entity_1 = require("../entities/tweet.entity");
const schedule_1 = require("@nestjs/schedule");
const cache_manager_1 = require("@nestjs/cache-manager");
let TweetsCountService = class TweetsCountService {
    constructor(tweetModel, cacheManager) {
        this.tweetModel = tweetModel;
        this.cacheManager = cacheManager;
        this.limit = 10;
    }
    async countTweets() {
        let offset = await this.cacheManager.get('tweet-offset');
        offset = offset === undefined ? 0 : offset;
        const tweets = await this.tweetModel.findAll({
            offset,
            limit: this.limit,
        });
        if (tweets.length === this.limit) {
            offset += this.limit;
            await this.cacheManager.set('tweet-offset', offset);
        }
        console.log('achou + ${this.limit} tweets');
    }
};
exports.TweetsCountService = TweetsCountService;
__decorate([
    (0, schedule_1.Interval)(5000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TweetsCountService.prototype, "countTweets", null);
exports.TweetsCountService = TweetsCountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(tweet_entity_1.Tweet)),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object, Object])
], TweetsCountService);
//# sourceMappingURL=tweets-count.service.js.map