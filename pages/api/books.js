import { ObjectId } from "mongodb";
import { getCollection } from "@/utils/functions";
import { sendMethodNotAllowed, sendOk } from "@/utils/apiMethods";

const COLLECTION_NAME = "books"
const getBooks = async () => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.find({}).toArray();
}

const getBook = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.findOne({ _id: ObjectId.createFromHexString(id)}) 
}

const createBook = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.insertOne(data);
}

const updateBook = async ( data) => {
    const collection = await getCollection(COLLECTION_NAME);
    const id = data._id;
    delete data._id;
    return collection.updateOne({_id: new ObjectId(id)}, {$set: data});

}

const deleteBook = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.deleteOne({ _id: ObjectId.createFromHexString(id)})
}

export default async function handler(req, res) {
  const isAllowedMethod = req.method === "GET" || req.method === "POST" || req.method === "PUT" || req.method === "DELETE";

  if (!isAllowedMethod) {
    return sendMethodNotAllowed(res, "Method Not Allowed")
  }

  if(req.method === "GET" && req.query.id) {
    const book = await getBook(req.query.id)
    return sendOk(res, book);
  }

  if(req.method === "GET") {
    const books = await getBooks()
    return sendOk(res, books);
  }

  if(req.method === "POST") {
    const book = await createBook(req.body);
    return sendOk(res, book);
  }

  if(req.method === "PUT") {
    const book = await updateBook(req.body);
    return sendOk(res, book);
  }

  if(req.method === "DELETE") {
    const book = await deleteBook(req.query.id);
    return sendOk(res, book);
  }
}