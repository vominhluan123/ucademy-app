"use sever";

import { connectToDatabase } from "../mongoose";

export default function createUser(params:any) {
    try {
        connectToDatabase()
    } catch () {
        
    }
}