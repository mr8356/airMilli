import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*여기부터 코드 예제*/

  // getAll 함수에 대한 여러 테스트이므로 describe(이름)을 씁니다
  describe('getAll function' , ()=>{

    // getAll 함수의 반환값이 배열인지 테스트(1)
    it('should be an Array',()=>{

      //movie.service 파일의 getAll 함수의 반환값을 저장
      const result = service.getAll();

      //테스트
      expect(result).toBeInstanceOf(Array);
    })
  });


  describe('getOne' ,()=>{
    // create 함수로 무비하나를 추가하고 반환했을때,
    // 제대로 된 무비가 나오는지 테스트
    it('should return a movie' , ()=>{
      service.create({
        title : 'Test Movie',
        genres : ['test'],
        year : 2002
      });
      const movie = service.getOne(1);
      // 존재 여부를 테스트
      expect(movie).toBeDefined();
      // id , title 등의  정보가 제대로 들어갔는지 테스트
      expect(movie.id).toEqual(1);
      expect(movie.title).toEqual("Test Movie");
      expect(movie.year).toEqual(2002);
    });

    it('should return a not found error' , ()=>{
      try {
        service.getOne(999); //존재하지 않는 무비
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    })
  });

  describe('deleteOne', ()=>{
    it('deletes a movie' , ()=>{
      service.create({
        title : "test Movie",
        genres : ["test"],
        year : 2022
      })
      // 삭제 전후 무비 전제를 조회
      const beforeDelete = service.getAll();
      service.deleteOne(1);
      const afterDelete = service.getAll();

      // 삭제 됐다면 삭제 전후에 총 무비 갯수의 차이는 1이어야한다.
      expect(afterDelete.length).toBeLessThan(beforeDelete.length);
    })

    it('should return a 404 error' , ()=>{
      try {
        service.deleteOne(999); //존재하지 않는 무비
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    })
  });

  describe('create' , ()=>{
    it('should create a movie' , ()=>{
      const beforeCreate = service.getAll().length;
      service.create({
        title : "test Movie",
        genres : ["test"],
        year : 2022
      });
      const afterCreate = service.getAll().length;
      // 무비 생성하면 영화 갯수가 늘어나야한다.
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    })
  });

  describe('update' , ()=>{
    it('should update a movie' , ()=>{
      service.create({
        title : "test Movie",
        genres : ["test"],
        year : 2022
      });
      service.update(1 , {title : "updated title"});
      expect(service.getOne(1).title).toEqual("updated title");
    })

    it('should return a 404 error' , ()=>{
      try {
        service.update(999 , {title : "updated title"} ); //존재하지 않는 무비
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    })
  })
});
