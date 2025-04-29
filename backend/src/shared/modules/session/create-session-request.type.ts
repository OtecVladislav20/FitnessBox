import { Request } from 'express';
import { RequestParams } from '../../libs/rest/types/request.params.type.js';
import { RequestBody } from '../../libs/rest/types/request-body.type.js';
import { CreateSessionDto } from './dto/create-session.dto.js';

export type CreateSessionRequest = Request<RequestParams, RequestBody, CreateSessionDto>;
