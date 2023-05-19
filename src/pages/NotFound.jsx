import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src="https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg"
        alt="404 Not Found"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default NotFound;
