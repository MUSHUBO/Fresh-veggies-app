"use server";

import dbConnect, { collectionNamesObj } from "@/library/dbConnect";
import bcrypt from "bcrypt"

export const registerUser = async (payload) => {
  const userCollection = await dbConnect(collectionNamesObj.userCollection);

  // Validation
  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await userCollection.findOne({ email: payload.email })

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    
    const newUser = { ...payload, password: hashedPassword };
    const result = await userCollection.insertOne(newUser);
    result.insertedId = result.insertedId.toString()

    return result;
  }

  return null;
}
