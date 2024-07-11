import { Body, Controller, Get, Header, HttpCode, Param, Post, Req, Put, Delete } from "@nestjs/common";
import { CreateCatDto, UpdateCatDto } from "./cats.dto";
import { CatsService } from "./cats.service";

@Controller('cats')
export class CatsController{
    constructor(private catsService: CatsService){}
    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    async create(@Body() createCatDto: CreateCatDto): Promise<any> {
        return "This shall create a new Cat";
    }

    @Get()
    @HttpCode(200)
    findAll(): any {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params);
        return  `This shall return #${params.id} cat`;
        
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto  ) {
        return `This action update #${id} Cat`;
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}