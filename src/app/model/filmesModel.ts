import { BaseModel } from './baseModel';

export class FilmesModel extends BaseModel {
    name: string | undefined;
    is_on_netflix: boolean | undefined;
    imdb_score: BigInt | undefined;
    director: string | undefined;
    genre: string | undefined;
}