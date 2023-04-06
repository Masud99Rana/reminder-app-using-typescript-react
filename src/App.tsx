import { useEffect, useState } from "react";
import "./App.css";
import NewReminder from "./components/NewReminder";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminders";

// const reminders: Reminder[] = [{ id: 1, title: "Reminder 1" }];

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const addReminder = async (title: string) => {
    // console.log(title);
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  const removeReminder = (id: number) => {
    // console.log(id);
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
