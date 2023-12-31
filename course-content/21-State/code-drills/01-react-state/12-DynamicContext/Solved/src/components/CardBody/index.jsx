import { useContext } from "react";
import UserContext from "../../utils/userContext";

function CardBody() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4>
        Favorite language: {user.language}
      </h4>
      <h4>
          Email: {user.email}
      </h4>
    </div>
  );
}

export default CardBody;
