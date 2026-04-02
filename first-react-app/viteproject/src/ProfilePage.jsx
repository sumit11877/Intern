import { useAuth } from "./context/AuthContext";
const ProfilePage = () => {
  const { user, users } = useAuth();
  return (
    <h1>
      welcome, {user?.name}! {user?.role}, phone: {users?.phone}, weight: {users?.weight}
    </h1>
  );
};
export default ProfilePage;