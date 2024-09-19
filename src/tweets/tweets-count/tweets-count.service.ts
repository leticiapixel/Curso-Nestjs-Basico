import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tweet } from '../entities/tweet.entity';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class TweetsCountService {
  private limit = 10;
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  @Interval(5000)
  async countTweets() {
    let offset = await this.cacheManager.get<number>('tweet-offset');
    offset = offset === undefined ? 0 : offset;

    console.log('offset: ${offset}');

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
}
