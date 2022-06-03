import { IsNumber, isString, IsString } from "class-validator"

// data transform object
// 유효성 검증
export class CreateMovieDto {
    @IsString()
    readonly title : string
    @IsNumber()
    readonly year : number
    @IsString({each : true})
    readonly genres : string[]
}