"use babel";

import MarkdownReduxToc from '../lib/markdown-redux-toc';

const TEXT_WITH_TOC_01_INPUT =
`# Table of Contents
# Title 1
A paragraph
# Title 2
Another paragraph`
const TEXT_WITH_TOC_01_OUTPUT =
`# Table of Contents

-   [Title 1](#title-1)
-   [Title 2](#title-2)
`

describe("MarkdownReduxToc", function() {
  describe("toc", function() {
    it("returns a String", function() {
      expect(new MarkdownReduxToc(TEXT_WITH_TOC_01_INPUT).toc().asString).toEqual(TEXT_WITH_TOC_01_OUTPUT);
    });
  });
});
