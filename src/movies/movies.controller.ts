import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { rename } from 'fs';
import { Movie } from './entities/movie.entities';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:MoviesService ){}

    @Get()
    getAll() : Movie[]{
      return this.moviesService.getAll()
    }

    @Get('search')
    search(@Query('year') searchingYear: string){
        return `we are going to search for a movie after ${searchingYear}`
    }

    @Get('/:id')
    getOne(@Param('id') movieId:string) : Movie{
        return this.moviesService.getOne(movieId);
    }
    @Post()
    create(@Body() movieData){
        return this.moviesService.create(movieData);
    }
    @Delete('/:id')
    delete(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }
    @Patch('/:id')
    patch(@Param('id') movieId : string, @Body() updateData){
        return {
            "update id" : movieId,
            ...updateData,
        }
    }

}
