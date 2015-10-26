"use babel";

import MarkdownReduxToc from '../lib/markdown-redux-toc';

function generateTOC(toc) {
  let input =
  `# ${toc}\n# Title 1\nA paragraph\n# Title 2\nAnother paragraph`

  let output =
  `# ${toc}\n\n-   [Title 1](#title-1)\n-   [Title 2](#title-2)\n`
  return {input, output}
}

describe("MarkdownReduxToc", function() {
  describe("method toc", function() {
    describe(`when finds the header Toc`, function() {
      it("returns TOC as a String", function() {
        let corpus = 'Toc'
        let pair = generateTOC(corpus)
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toUpperCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toLowerCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
      });
    });

    describe(`when finds the header Table of Contents`, function() {
      it("returns TOC as a String", function() {
        let corpus = 'Table of Contents'
        let pair = generateTOC(corpus)
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toUpperCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toLowerCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
      });
    });

    describe(`when finds the header table-of-contents`, function() {
      it("returns TOC as a String", function() {
        let corpus = 'Table-of-Contents'
        let pair = generateTOC(corpus)
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toUpperCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toLowerCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
      });
    });
  });
});
