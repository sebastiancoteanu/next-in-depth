import Note from "@/components/note/note.component";
import { Note as TNote } from "@/components/note/note.models";
import { FC } from "react";

const NoteList: FC = async () => {
  const response = await fetch("http://localhost:4000/api/notes");
  const notes = (await response.json()) as TNote[];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
