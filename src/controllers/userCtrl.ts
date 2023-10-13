import { Request, Response } from "express";
import axios from 'axios'


//creating temporary variable to eliminate calling of api if data present in memory.
let data  = <object[]>[]

export const getUsers = async(req:Request, res:Response)=>{
    try{
        if(!data.length){
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            data = result?.data;
            res.status(200).json({success:true, data})
            // console.log('no data')
        }else{
            // console.log('data present')
            res.status(200).json({success:true, data})
        }
    }catch(err){
            data = [];
            return res.status(500).json({success:false, message:"Unable to fetch data, please try later."})
    }
}