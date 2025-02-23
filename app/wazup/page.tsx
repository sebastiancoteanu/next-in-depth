import NoteList from "./_components/note-list.component";

export default function Wazup() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-[auto_1fr] items-start py-4 gap-4">
        <h2 className="text-xl font-semibold text-gray-700">
          These are some notes, do not bother
        </h2>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-md shadow-md hover:bg-yellow-700 transition justify-self-end w-auto min-w-[100px]">
          Add note
        </button>
      </div>

      <hr className="border-gray-300 mb-4" />
      <NoteList />
    </div>
  );
}
