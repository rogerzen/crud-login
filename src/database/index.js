import mongoose from "mongoose";

import config from "../config/database"

mongoose.set('strictQuery', true)
class Database{
    constructor(){
        this.connection = mongoose.connect(
            config.url,
            )
    }
}

export default new Database()