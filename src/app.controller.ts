import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    
    @Get()
    home(){
        return 'welcome to my app';
    }

    @Get('/name')
    name(){
        return 'creator is donghyun';
    }

    @Get('/github')
    github(){
        return 'github.com/mr8356';
    }

}
