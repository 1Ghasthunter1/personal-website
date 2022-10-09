import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArticleSkeleton = () => {
  return (
    <div className="flex justify-center text-gray-600">
      <div className="animate-spin">
        <FontAwesomeIcon icon="circle-notch" size="xl"></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
