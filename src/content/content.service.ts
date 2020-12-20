import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateContentDTO } from './dto/create-content.dto';
import { Content, ContentDocument } from './schema/content.schema';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
  ) {}

  async findAll(): Promise<Content[]> {
    return this.contentModel.find();
  }

  async findOne(id: string): Promise<Content> {
    return this.contentModel.findOne({ _id: id });
  }

  async create(createContentDTO: CreateContentDTO): Promise<Content> {
    const newPost = new this.contentModel(createContentDTO);
    return newPost.save();
  }

  async update(id: string, post: Content): Promise<Content> {
    return this.contentModel.findByIdAndUpdate(id, post, { new: true });
  }

  async delete(id: string): Promise<Content> {
    return this.contentModel.findByIdAndRemove(id);
  }
}
