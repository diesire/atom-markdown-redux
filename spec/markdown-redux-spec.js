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

# Title 1

A paragraph

# Title 2

Another paragraph
`

describe("MarkdownRedux", function() {
  it("is loaded", function() {
    expect(MarkdownRedux).toBeDefined();
  });

  it("is a class", function() {
    expect(new MarkdownRedux()).toBeDefined();
  });

  it("has a method", function() {
    expect(new MarkdownRedux().toc(TEXT_WITH_TOC_01_INPUT)).toEqual(TEXT_WITH_TOC_01_OUTPUT);
  });
});
