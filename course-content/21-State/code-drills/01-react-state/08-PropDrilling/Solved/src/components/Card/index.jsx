import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card({ title, image, language, email, handleBtnClick }) {
  return (
    <div>
      <CardHeading title={title} />
      <CardImg image={image} />
      <CardBody language={language} email={email} />
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="next"
      />
    </div>
  );
}

export default Card;
