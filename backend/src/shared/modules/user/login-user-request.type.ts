import { Request } from 'express';
import { LoginUserDto } from './dto/login-user.dto.js';
import { RequestParams } from '../../libs/rest/types/request.params.type.js';
import { RequestBody } from '../../libs/rest/types/request-body.type.js';

export type LoginUserRequest = Request<RequestParams, RequestBody, LoginUserDto>;
