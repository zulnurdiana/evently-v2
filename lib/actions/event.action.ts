"use server";

import { CreateEventParams } from "@/types";
import { connectToDataBase } from "../database";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import { handleError } from "../utils";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDataBase();

    const organizer = await User.findById(userId);

    if (!organizer) {
      throw new Error("Organizer not found");
    }

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    if (newEvent) {
      return JSON.parse(JSON.stringify(newEvent));
    }
  } catch (error) {
    handleError(error);
  }
};
