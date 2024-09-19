import { Tweet } from '../entities/tweet.entity';
import { Cache } from 'cache-manager';
export declare class TweetsCountService {
    private tweetModel;
    private cacheManager;
    private limit;
    constructor(tweetModel: typeof Tweet, cacheManager: Cache);
    countTweets(): Promise<void>;
}
