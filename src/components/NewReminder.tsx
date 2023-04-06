import { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

export default function NewReminder({
  onAddReminder,
}: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(title);
    onAddReminder(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          // defaultValue={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary rounded-pill my-3">
          Add Reminder
        </button>
      </form>
    </div>
  );
}
