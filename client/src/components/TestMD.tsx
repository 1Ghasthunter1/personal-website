import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";

import blockMap from "./test.json"; // https://www.notion.so/api/v3/loadPageChunk

export default () => (
  <div style={{ maxWidth: 768 }}>
    h1
    <NotionRenderer blockMap={blockMap} />
  </div>
);
