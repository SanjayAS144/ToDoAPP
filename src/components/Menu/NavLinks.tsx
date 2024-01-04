const links = [
  {
    name: "Today's tasks",
    path: "/today",
  },
  {
    name: "All tasks",
    path: "/",
  },
  {
    name: "Important tasks",
    path: "/important",
  },
  {
    name: "Completed tasks",
    path: "/completed",
  },
  {
    name: "Uncompleted tasks",
    path: "/uncompleted",
  },
];
export default function NavLinks({ classActive }: { classActive: string }) {
  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li key={link.path}>
            <div
              className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 ${classActive}`}
            >
              {link.name}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
