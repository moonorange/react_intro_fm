import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams(); // how you get params from React Router
  return <h2>Hi! {id}</h2>;
};

export default Details;
