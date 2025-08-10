export default function Table({ children }) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-secondary-0 dark:bg-secondary-800 text-secondary-900 dark:text-secondary-0">
      <table>{children}</table>
    </div>
  );
}

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
