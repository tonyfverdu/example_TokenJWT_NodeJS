import User from '../models/User.js'
import httpErrors from 'http-errors'


export default async function auth(req, resp, next) {
  // console.log('entro en autorizacion')
  // console.log('req.headers:  ', req.headers)

  const token = req.headers['x-authorization']
  // const token = req.cookies.token

  if (!token) {
    throw httpErrors.Unauthorized('There is not Token. You shall not pass!')
  } else {
    const user = await User.findByAuthToken(token)
    if (!user) {
      throw httpErrors.Unauthorized('There is not user.  You shall not pass!')
    }
    req.user = user
    next()
  }
}