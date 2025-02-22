import Note from "@/components/note/note.component";
import { Note as TNote } from "@/components/note/note.models";
import { FC } from "react";

interface Props {
  notes: TNote[];
}

const NoteList: FC<Props> = ({ notes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {notes.map((note) => (
        <Note key={note.title} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
