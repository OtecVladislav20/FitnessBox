import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto.js';
import { RequestParams } from '../../libs/rest/types/request.params.type.js';
import { RequestBody } from '../../libs/rest/types/request-body.type.js';

export type CreateUserRequest = Request<RequestParams, RequestBody, CreateUserDto>;
