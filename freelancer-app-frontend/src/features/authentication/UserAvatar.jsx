import Loading from "../../ui/Loading";
import useUser from "./useUser";

export default function UserAvatar() {
  const { user, isLoading } = useUser();

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <span className="text-secondary-900 dark:text-secondary-0">{isLoading ? <Loading /> : user?.name}</span>
      <img
        src="../../../public/user-png-33842.png"
        alt="user-account"
        className="w-7 h-7 rounded-full object-cover object-center border-1 border-secondary-500 dark:border-secondary-0 bg-secondary-0"
      />
    </div>
  );
}
