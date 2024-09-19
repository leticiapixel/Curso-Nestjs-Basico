import { TweetsService } from './tweets.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
export declare class TweetsController {
    private readonly tweetsService;
    constructor(tweetsService: TweetsService);
    create(createTweetDto: CreateTweetDto): Promise<import("./entities/tweet.entity").Tweet>;
    findAll(): Promise<import("./entities/tweet.entity").Tweet[]>;
    findOne(id: string): string;
    update(id: string, updateTweetDto: UpdateTweetDto): string;
    remove(id: string): string;
}
