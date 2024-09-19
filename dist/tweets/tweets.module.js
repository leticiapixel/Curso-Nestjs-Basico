"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetsModule = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const tweets_service_1 = require("./tweets.service");
const tweets_controller_1 = require("./tweets.controller");
const sequelize_1 = require("@nestjs/sequelize");
const tweet_entity_1 = require("./entities/tweet.entity");
const tweets_count_service_1 = require("./tweets-count/tweets-count.service");
let TweetsModule = class TweetsModule {
};
exports.TweetsModule = TweetsModule;
exports.TweetsModule = TweetsModule = __decorate([
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register(), sequelize_1.SequelizeModule.forFeature([tweet_entity_1.Tweet])],
        controllers: [tweets_controller_1.TweetsController],
        providers: [tweets_service_1.TweetsService, tweets_count_service_1.TweetsCountService],
    })
], TweetsModule);
//# sourceMappingURL=tweets.module.js.map