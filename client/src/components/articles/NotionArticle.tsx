import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

import { useQuery } from "react-query";
import axios from "axios";
import ArticleSkeleton from "./ArticleSkeleton";

const NotionArticle = ({ notionId }: { notionId?: string }) => {
  const notionQuery = useQuery(["notion", notionId], async () => {
    const result = await axios.get(
      `https://notion-api.splitbee.io/v1/page/${notionId}`
    );
    return result;
  });
  return (
    <>
      {notionQuery.data?.data ? (
        <NotionRenderer blockMap={notionQuery.data?.data} />
      ) : (
        <ArticleSkeleton />
      )}
    </>
  );
};

export default NotionArticle;
