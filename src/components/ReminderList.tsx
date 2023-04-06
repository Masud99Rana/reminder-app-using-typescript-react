import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
}

export default function ReminderList({ items }: ReminderListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
