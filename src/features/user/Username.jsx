import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  // if theres no username then dont display the component
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
