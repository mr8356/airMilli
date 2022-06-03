import { IsNumber, isString, IsString } from "class-validator"
import { PartialType } from "@nestjs/mapped-types"
import { CreateMovieDto } from "./create-movie.dto"
// data transform object
// 유효성 검증


// partial type 이용
// 자동으로 기존 dto클래스에서 부분적으로 입력 받을수 있도록
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}


// partialType 이용 안할시 코드
// export class UpdateMovieDto {
//     //필수로 입력해야하는것이 아니기에 ?를 변수 옆에 붙인다.
//     @IsString()
//     readonly title? : string
//     @IsNumber()
//     readonly year? : number
//     @IsString({each : true})
//     readonly genres? : string[]
// }