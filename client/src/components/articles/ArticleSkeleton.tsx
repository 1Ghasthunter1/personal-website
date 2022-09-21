import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArticleSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-spin">
        <FontAwesomeIcon icon="circle-notch"></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
