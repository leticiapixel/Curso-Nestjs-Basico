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
exports.TweetsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const tweet_entity_1 = require("./entities/tweet.entity");
let TweetsService = class TweetsService {
    constructor(tweetModel) {
        this.tweetModel = tweetModel;
    }
    create(createTweetDto) {
        return this.tweetModel.create(createTweetDto);
    }
    findAll() {
        return this.tweetModel.findAll();
    }
    findOne(id) {
        return `This action returns a #${id} tweet`;
    }
    update(id, updateTweetDto) {
        return `This action updates a #${id} tweet`;
    }
    remove(id) {
        return `This action removes a #${id} tweet`;
    }
};
exports.TweetsService = TweetsService;
exports.TweetsService = TweetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(tweet_entity_1.Tweet)),
    __metadata("design:paramtypes", [Object])
], TweetsService);
//# sourceMappingURL=tweets.service.js.map