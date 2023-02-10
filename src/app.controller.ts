import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  list(): any[] {
    return this.appService.getList();
  }

  @Post()
  create(@Body() body: any): void {
    this.appService.saveEvent(body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string): void {
    this.appService.deleteEvent(id);
  }

  @Post('move')
  moveEvent(@Body() body: any) {
    this.appService.moveEvent(body);
  }
}
