import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  /* this hook helps to display the actual error message that happend inside the
  React router by using this custom hook useRouteError. it is possible only becuase we are
  using errorElement: <Error />, in the app.jsx file in the parent router. */

  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
