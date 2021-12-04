import nc from 'next-connect';
import { dbConnect } from "../../../config";
import { allInfos } from "../../../controllers/publishAppInfoControllers/appInfoControllers";
import onError from '../../../middlewares/errors';
import { isAuthenticatedUser } from '../../../middlewares/authUser'

const handler = nc({ onError });

dbConnect();

handler.get(allInfos)

export default handler;