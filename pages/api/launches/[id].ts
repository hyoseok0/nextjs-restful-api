import type { NextApiRequest, NextApiResponse } from 'next'
import { LaunchUtil } from '../../../server/services/launch/launch'
import { StatusCodes } from 'http-status-codes'
import { UrlUtil } from '../../../server/util/urlUtil'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const suggestions = await LaunchUtil.getLaunch(UrlUtil.getOrElse(id))
  res.status(StatusCodes.OK).json(suggestions)
}

export default handler
