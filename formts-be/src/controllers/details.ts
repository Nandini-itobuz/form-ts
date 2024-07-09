import { Request,Response } from "express";
import { CustomerDetails } from "../interfaces/detailsController"

export function fetchCustomerDetails(req :Request,res: Response) : void {
    const detailsX : CustomerDetails = {
            id:req.body.id,
            firstName:req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            age:req.body.age,
            height:req.body.height
        }
    // const detailsArr :(CustomerDetails[] ) = JSON.parse(localStorage.getItem('details') || []);
    // const detailsArr : object[]= []
    // detailsArr.push(details)
    // localStorage.setItem('details',JSON.stringify(detailsArr))
    // console.log(localStorage.getItem('details'))
    res.status(200).json(detailsX)
}
