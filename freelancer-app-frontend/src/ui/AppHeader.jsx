import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import { RxHamburgerMenu } from "react-icons/rx";

export default function AppHeader({ setIsOpen }) {
  const { isLoading } = useUser();

  return (
    <header className={`w-full bg-secondary-0 border-1 border-secondary-200 ${isLoading ? "blur-sm opacity-100" : ""}`}>
      <Container>
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => setIsOpen((prev) => !prev)} className="flex items-center justify-center cursor-pointer">
            <RxHamburgerMenu className="w-7 h-7" />
          </button>
          <HeaderMenu />
          <UserAvatar />
        </div>
      </Container>
    </header>
  );
}
