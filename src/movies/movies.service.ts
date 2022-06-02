import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entities';

@Injectable()
export class MoviesService {
    private movies : Movie[] = [];

    getAll() : Movie[]{
        return this.movies;
    }

    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }
    getOne(id:string) :Movie{
        return this.movies.find(movie => movie.id === +id)
    }

    deleteOne(id:string){
        this.movies.filter(movie => movie.id !== +id)
        return;
    }
}
