import { Body, Controller, Get, Header, HttpCode, Param, Post, Req, Put, Delete } from "@nestjs/common";
import { CreateCatDto, UpdateCatDto } from "./cats.dto";

@Controller('cats')
export class CatsController{

    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    async create(@Body() createCatDto: CreateCatDto): Promise<any> {
        return "This shall create a new Cat";
    }

    @Get()
    @HttpCode(200)
    findAll(): string {
        return "Return List of cats";
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