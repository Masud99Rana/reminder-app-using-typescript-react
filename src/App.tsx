import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";

import { useState } from "react";

// const reminders: Reminder[] = [{ id: 1, title: "Reminder 1" }];

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
