import express, {Express, Request, Response} from 'express'
import cors from 'cors';

//ROUTES
import userRouter from './routes/routes';

const app: Express = express();

app.use(express.json());
app.use(cors());


app.get('/test', (req:Request, res:Response)=>{
    res.status(200).json("Server running on")
})

app.use('/api/v1', userRouter);

let port = 5000;

app.listen(port, ()=>{
    console.log('Server running on port', port)
})
