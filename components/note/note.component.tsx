"use client";

import {
  FC,
  FocusEventHandler,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { Note as TNote } from "./note.models";
import classNames from "classnames";
import { saveNote } from "./note.actions";

interface Props {
  note: TNote;
  forceInEditMode?: boolean;
}

const Note: FC<Props> = ({ note, forceInEditMode }) => {
  const [inEditMode, setInEditMode] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  const [stateNote, saveAction, isSavePending] = useActionState(saveNote, note);

  useEffect(() => {
    if (typeof forceInEditMode === "undefined") {
      return;
    }

    setInEditMode(forceInEditMode);
  }, [forceInEditMode]);

  useEffect(() => {
    if (!isSavePending) {
      setInEditMode(false);
    }
  }, [isSavePending]);

  const onFormBlur: FocusEventHandler<HTMLFormElement> = (e) => {
    if (e.currentTarget?.contains(e.relatedTarget) || isSavePending) {
      return;
    }

    e.currentTarget.requestSubmit();
  };

  const onNoteContentClick = () => {
    setInEditMode(true);

    setTimeout(() => {
      titleInputRef.current?.focus();
    }, 100);
  };

  return (
    <section
      className={classNames(
        "p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-md transition-opacity duration-200",
        { ["opacity-50"]: isSavePending }
      )}
    >
      {inEditMode ? (
        <form onBlur={onFormBlur} className="grid gap-4" action={saveAction}>
          <input type="hidden" name="id" value={note.id} />
          <input
            defaultValue={stateNote.title}
            ref={titleInputRef}
            type="text"
            name="title"
            className="w-100 text-lg font-semibold text-yellow-900 bg-transparent focus:outline-none"
          />
          <textarea
            defaultValue={stateNote.text}
            name="text"
            className="text-yellow-800 bg-transparent focus:outline-none"
          />
        </form>
      ) : (
        <section
          role="button"
          onClick={onNoteContentClick}
          className="grid gap-4 cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-yellow-900">
            {stateNote.title}
          </h3>
          <p className="text-yellow-800">{stateNote.text}</p>
        </section>
      )}
    </section>
  );
};

export default Note;
