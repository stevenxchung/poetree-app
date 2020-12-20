import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { Content } from './interfaces/content.interface';
import { CreateContentDTO } from './dto/create-content.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PlainBody } from './helpers/plain-body';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  findAll(): Promise<Content[]> {
    return this.contentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Content> {
    return this.contentService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@PlainBody() inputText: string): Promise<Content> {
    const createContentDTO: CreateContentDTO = {
      poem: inputText,
    };
    return this.contentService.create(createContentDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@PlainBody() inputText: string, @Param('id') id): Promise<Content> {
    const updateContentDTO: CreateContentDTO = {
      poem: inputText,
    };
    return this.contentService.update(id, updateContentDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id): Promise<Content> {
    return this.contentService.delete(id);
  }
}
