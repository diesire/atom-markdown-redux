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
    let corpus, pair

    corpus = 'toc'
    describe(`when finds the header ${corpus}`, function() {
      it("returns TOC as a String", function() {
        pair = generateTOC(corpus)
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toUpperCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toLowerCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
      });
    });

    corpus = 'Table of Contents'
    describe(`when finds the header ${corpus}`, function() {
      it("returns TOC as a String", function() {
        pair = generateTOC(corpus)
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toUpperCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toLowerCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
      });
    });

    corpus = 'table-of-contents'
    describe(`when finds the header ${corpus}`, function() {
      it("returns TOC as a String", function() {
        pair = generateTOC(corpus)
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toUpperCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
        pair = generateTOC(corpus.toLowerCase())
        expect(new MarkdownReduxToc(pair.input).toc().asString).toEqual(pair.output);
      });
    });
  });
});
