import { IInterface } from './IInterface';

export interface IFilme extends IInterface {
    name: string | undefined;
    is_on_netflix: boolean | undefined;
    imdb_score: BigInt | undefined;
    director: string | undefined;
    genre: string | undefined;
}
