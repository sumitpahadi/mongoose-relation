const Right = require("../model/Right");
const User = require("../model/User");
const register = async (req, res) => {
  try {
    const { name, email } = req.body;
    const data = await User.create({ name: name, email: email });
    return res.status(200).json({
      msg: "data inserted",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error,
    });
  }
};
const right = async (req, res) => {
  try {
    const { userid, right } = req.body;
    const data = await Right.create({
      userid: userid,
      right: right,
    });
    return res.status(200).json({
      msg: "right posted",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
const geting = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await Right.find({ _id: id }).populate("userid");
    return res.status(200).json({
      msg: data,
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
// const get=async(req,res)=>{
//     try {
//         const 
//     } catch (error) {
//         return res.status(500).json({ msg: error });

        
//     }
// }

module.exports = { register, right, geting };
