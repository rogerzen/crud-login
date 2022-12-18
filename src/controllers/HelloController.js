class HelloController{
    async index(req, res){
        return res.json({ hello: 'Hello' })
    }

}

export default new HelloController()