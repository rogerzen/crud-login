import bccrypt from "bcryptjs"


export const checkPassword = async(user, password) => {
    bccrypt.compare(password, user.password)
}