"use babel";

import MarkdownRedux from '../lib/markdown-redux';

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

describe("MarkdownRedux", function() {
  it("is loaded", function() {
    expect(MarkdownRedux).toBeDefined();
  });

  it("is a class", function() {
    expect(new MarkdownRedux()).toBeDefined();
  });

  describe("toc", function() {
    it("returns a String", function() {
      expect(new MarkdownRedux().toc(TEXT_WITH_TOC_01_INPUT).asString).toEqual(TEXT_WITH_TOC_01_OUTPUT);
    });
  });
});
