import { getDB } from "../config/db.js";
import { ApiError } from "../utils/apiError.js";
import { ObjectId } from "mongodb";

async function getHobby(req, res, next) {
    try {
        const db = await getDB();
        const hobbies = await db.collection("hobbies").find().toArray();
        if (hobbies.length === 0) {
            return next(new ApiError("No Hobbies Group found", 404));
        }
        res.status(200).json(hobbies);
    } catch (error) {
        next(error);
    }
}

async function getHobbyById(req, res, next) {
    try {
        const db = await getDB();
        const fID = req.params.id;
        const hobby = await db
            .collection("hobbies")
            .findOne({ _id: new ObjectId(fID) });
        if (!hobby) {
            return next(
                new ApiError("Hobby Group for this user not found", 404)
            );
        }
        res.status(200).json(hobby);
    } catch (error) {
        next(error);
    }
}

async function getHobbyByUserId(req, res, next) {
    try {
        const db = await getDB();
        const fID = req.params.id;
        const hobby = await db
            .collection("hobbies")
            .find({ userID: fID })
            .toArray();
        if (hobby.length === 0) {
            return next(new ApiError("No Hobbies Group found", 404));
        }
        res.status(200).json(hobby);
    } catch (error) {
        next(error);
    }
}

async function createHobby(req, res, next) {
    try {
        if (!req.body) {
            return next(new ApiError("Hobby Group data is required!", 404));
        }
        const db = await getDB();
        const hobby = await db.collection("hobbies").insertOne(req.body);
        if (hobby.insertedId === null) {
            return next(new ApiError("Hobby Group not created", 404));
        }
        res.status(201).json(hobby);
    } catch (error) {
        next(error);
    }
}

async function updateHobby(req, res, next) {
    try {
        if (!req.body) {
            return next(new ApiError("Hobby Group data is required!", 404));
        }
        const fID = req.params.id;
        const db = await getDB();
        const hobby = await db
            .collection("hobbies")
            .updateOne({ _id: new ObjectId(fID) }, { $set: req.body });
        if (hobby.modifiedCount === 0) {
            return next(
                new ApiError("Hobby Group not updated || ID not found", 404)
            );
        }
        res.status(200).json(hobby);
    } catch (error) {
        next(error);
    }
}

async function deleteHobby(req, res, next) {
    try {
        const id = req.params.id;
        const db = await getDB();
        const hobby = await db
            .collection("hobbies")
            .deleteOne({ _id: new ObjectId(id) });
        if (hobby.deletedCount === 0) {
            return next(
                new ApiError("Hobby Group not deleted || ID not found", 404)
            );
        }
        res.status(200).json(hobby);
    } catch (error) {
        next(error);
    }
}

export {
    getHobby,
    getHobbyById,
    createHobby,
    updateHobby,
    deleteHobby,
    getHobbyByUserId,
};
