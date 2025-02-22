"use server";
import { Note } from "./note.models";

export const saveNote = async (_: Note, formData: FormData) => {
  const title = formData.get("title") as string;
  const text = formData.get("text") as string;

  await new Promise((res) => setTimeout(res, 1000));

  return {
    title,
    text,
  };
};
