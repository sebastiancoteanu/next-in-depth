import NoteList from "./_components/note-list.component";

const notes = [
  {
    title: "Productivity Boost",
    text: "Start your day with a clear goal. Focus on high-impact tasks first.",
  },
  {
    title: "Mindful Living",
    text: "Take a deep breath. Appreciate the small moments and find joy in the present.",
  },
  {
    title: "Tech Tip",
    text: "Keyboard shortcuts can save you hours. Learn a few each week and boost efficiency.",
  },
  {
    title: "Fitness Motivation",
    text: "Consistency is key. Even 10 minutes of exercise daily makes a difference.",
  },
  {
    title: "Creative Spark",
    text: "Break routine. Try a new hobby or explore a different perspective today.",
  },
  {
    title: "Deep Work",
    text: "Eliminate distractions. A focused hour is worth more than a scattered day.",
  },
  {
    title: "Healthy Eating",
    text: "A balanced diet fuels your mind and body. Eat real food, not processed junk.",
  },
  {
    title: "Learning Mindset",
    text: "Every failure is a lesson. Embrace mistakes and keep improving.",
  },
];

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
      <NoteList notes={notes} />
    </div>
  );
}
