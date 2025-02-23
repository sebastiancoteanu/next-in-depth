"use server";
import { Note } from "./note.models";

export const saveNote = async (_prevNote: Note, formData: FormData) => {
  const title = formData.get("title") as string;
  const text = formData.get("text") as string;
  const id = formData.get("id") as string;

  const response = await fetch(`http://localhost:4000/api/notes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, text }),
  });

  const updatedNote = (await response.json()) as Note;

  return updatedNote;
};
