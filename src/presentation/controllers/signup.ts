import { MissingParamError } from '../erros/missing-param-error'
import { HttpResponse, HttpRequest } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requierdFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requierdFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return httpRequest.body
  }
}
