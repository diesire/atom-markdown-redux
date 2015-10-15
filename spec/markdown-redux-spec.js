"use babel";

import MarkdownRedux from '../lib/markdown-redux';

describe("MarkdownRedux", function() {
  it("is loaded", function() {
    expect(MarkdownRedux).toBeDefined();
  });

  it("is a class", function() {
    expect(new MarkdownRedux()).toBeDefined();
  });
});
