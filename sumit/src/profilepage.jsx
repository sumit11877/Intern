import {useAuth} from "./context/AuthContext";

const Profilepage = () => {
    const { user } = useAuth();

    return <h1> welcome, {user?.name}! </h1>;
};

export default Profilepage;