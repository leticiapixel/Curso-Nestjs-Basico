import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';
export declare class TweetsService {
    private tweetModel;
    constructor(tweetModel: typeof Tweet);
    create(createTweetDto: CreateTweetDto): Promise<Tweet>;
    findAll(): Promise<Tweet[]>;
    findOne(id: number): string;
    update(id: number, updateTweetDto: UpdateTweetDto): string;
    remove(id: number): string;
}
