require("dotenv/config")

export default{
    secret: process.env.APP_SECRET,
    expireIn: "7d"
}