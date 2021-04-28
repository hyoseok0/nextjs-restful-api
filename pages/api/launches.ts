import type { NextApiRequest, NextApiResponse } from 'next'
import { LaunchUtil } from '../../server/services/launch/launch'
import { StatusCodes } from 'http-status-codes'
import { UrlUtil } from '../../server/util/urlUtil'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page, limit } = req.query
  const suggestions = await LaunchUtil.getPagedLaunches(UrlUtil.getOrElse(page), UrlUtil.getOrElse(limit))
  res.status(StatusCodes.OK).json(suggestions)
}

export default handler
