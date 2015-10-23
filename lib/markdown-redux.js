"use babel";

import MarkdownReduxToc  from './markdown-redux-toc';

class MarkdownRedux {
  toc (text) {
    return new MarkdownReduxToc(text).toc();
  }
}

export default MarkdownRedux;
