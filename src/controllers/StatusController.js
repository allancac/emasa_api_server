class StatusController{
    index = async (req, res)=> {
        res.status(200).json({
            metadata:{
                status:200,
                message: 'OK'
            }
        });
    }
}


export default new StatusController();