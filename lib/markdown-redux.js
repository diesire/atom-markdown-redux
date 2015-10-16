"use babel";

import Toc  from 'mdast-toc';
import Mdast from 'mdast';

class MarkdownRedux {
  toc (text) {
    let mdast = Mdast.use(Toc);
    let contents = mdast.run(mdast.parse(text));
    let doc = mdast.stringify(contents);
    return doc;
  }
}

export default MarkdownRedux;
