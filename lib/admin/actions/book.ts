"use server";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

export const createBook = async (params: BookParams) => {
  try {
    const newBook = await db
      .insert(books)
      .values({
        ...params,
        availableCopies: params.totalCopies, // Initially, all copies are available
      })
      .returning(); // Return the newly created book

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])), // Convert to JSON string and parse it back to object
    };
  } catch (error: any) {
    console.log(error);

    return {
      success: false,
      message: "An error occurred while creating the book.",
    };
  }
};
