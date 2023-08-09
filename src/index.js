import config from 'config';
import app from './app' 

const port = config.get('server.port') || 5500;

app.listen(port, ()=>{
    console.log(`Express Server is running on port ${port} `)
})
