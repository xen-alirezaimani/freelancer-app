import Container from "./Container";

export default function AppHeader({ setIsOpen }) {
  return (
    <header className="bg-blue-100 w-full">
      <Container>
        <div className="flex items-center justify-between h-16">
          <span>لوگو</span>
          <nav>منو</nav>
          <button onClick={() => setIsOpen((prev) => !prev)}>SideBar</button>
        </div>
      </Container>
    </header>
  );
}
