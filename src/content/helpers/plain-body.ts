import * as rawBody from 'raw-body';
import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const PlainBody = createParamDecorator(
  async (_, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest<import('express').Request>();
    if (!req.readable) {
      throw new BadRequestException('Invalid body!');
    }

    const body = (await rawBody(req)).toString('utf8').trim();
    return body;
  },
);
