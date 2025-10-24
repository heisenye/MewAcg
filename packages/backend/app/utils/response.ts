import message from '../constants/message'
import { ResponseCode } from '../constants/status'
import logger from '../logger'

interface IResponseSuccess<T = unknown> {
  code: number
  data?: T
  msg?: string
}
type IResponseError = string

export default class Response {
  public static UnknownError(error: Error, msg?: string): IResponseError {
    logger.error(error)
    return msg || message['UNKNOWN_ERR']
  }

  public static Success<T = unknown>({
    data,
    msg
  }: { data?: T; msg?: string } = {}): IResponseSuccess<T> {
    return {
      code: ResponseCode.OK,
      msg: msg || message['SUCCESS'],
      data: data
    }
  }

  public static Forbidden(msg?: string): IResponseError {
    return msg || message['FORBIDDEN']
  }

  public static InValidId(msg?: string): IResponseError {
    return msg || message['INVALID_ID']
  }

  public static InValidChapter(msg?: string): IResponseError {
    // return {
    //   code: ResponseCode.Bad_Request,
    //   msg: msg || message['INVALID_CHAPTER']
    // }
    return msg || message['INVALID_CHAPTER']
  }

  public static NoComic(msg?: string): IResponseError {
    // return {
    //   code: ResponseCode.Bad_Request,
    //   msg: msg || message['NO_COMIC']
    // }
    return msg || message['NO_COMIC']
  }

  public static NoUser(msg?: string): IResponseError {
    // return {
    //   code: ResponseCode.Unauthorized,
    //   msg: msg || message['NO_USER']
    // }
    return msg || message['NO_USER']
  }

  public static NoToken(msg?: string): IResponseError {
    // return {
    //   code: ResponseCode.Unauthorized,
    //   msg: msg || message['NO_TOKEN']
    // }
    return msg || message['NO_TOKEN']
  }

  public static InvalidCredentials(msg?: string): IResponseError {
    // return {
    //   code: ResponseCode.Unauthorized,
    //   msg: msg || message['INVALID_CREDENTIALS']
    // }
    return msg || message['INVALID_CREDENTIALS']
  }

  public static InvalidToken(msg?: string): IResponseError {
    // return {
    //   code: ResponseCode.Unauthorized,
    //   msg: msg || message['INVALID_TOKEN']
    // }
    return msg || message['INVALID_TOKEN']
  }

  public static UserAlreadyExists(msg?: string): IResponseError {
    // return {
    //   code: ResponseCode.Conflict,
    //   msg: msg || message['USER_ALREADY_EXISTS']
    // }
    return msg || message['USER_ALREADY_EXISTS']
  }
}
