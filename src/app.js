import express from 'express';

class App {
    constructor(){
        this.app = express();
        this.routes();
        this.middlewares();
        return this.app;
    }

    routes(){

    }
    middlewares(){

    }
}

export default new App();