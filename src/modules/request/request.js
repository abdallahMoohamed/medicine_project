import query from '../../../DB/connection.js'
import { asyncHandler } from "../../utils/errorHandling.js";



export const getRequestForAdmin = asyncHandler(async (req, res, next) => {
  let search = "";
  if (req.query.search) {
    // Query Params
    search = `where id like '%${req.query.search}%'`;
  }
  const data = await query(`select * from requests ${search}`);
  res.status(200).json(data);
})

export const getRequestForUser = asyncHandler(async (req, res, next) => {
  let search = "";
  if (req.query.search) {
    // Query Params
    search = `where id like '%${req.query.search}%'`;
  }
  const data = await query(`select * from requests ${search}`);
  res.status(200).json(data);
})

export const acceptRequset = asyncHandler(async (req, res, next) => {
  await query(`updata requests set status=1 where id=?`, [req.params.id]);
  res.json({ msg: "accepted" });
})


export const igonreRequest = asyncHandler(async (req, res, next) => {
  await query(`updata requests set status = 0 where id=?`, [req.params.id]);
  res.json({ msg: "decline" });
})

export const deleteRequet = asyncHandler(async (req, res, next) => {
  await query(`delete from requests where id=?`, [req.params.id]);
  res.json({ msg: "deleted" });
})

export const sendRequest = asyncHandler(async (req, res, next) => {
  const requestObj = {
    status: 0,
    user_id: req.body.userId,
    medicine_id: req.body.medicineId
  }
  await query(`insert into requests set ?`, requestObj);
  res.status(200).json({
    msg: "request added"
  });
})