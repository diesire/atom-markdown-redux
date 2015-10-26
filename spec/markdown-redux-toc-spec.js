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

const TEXT_WITH_TOC_02_INPUT =
`# table-of-contents
# Title 1
A paragraph
# Title 2
Another paragraph`

const TEXT_WITH_TOC_02_OUTPUT =
`# table-of-contents

-   [Title 1](#title-1)
-   [Title 2](#title-2)
`

const TEXT_WITH_TOC_03_INPUT =
`# table-of-contents
# Title 1
A paragraph
# Title 2
Another paragraph`

const TEXT_WITH_TOC_03_OUTPUT =
`# table-of-contents

-   [Title 1](#title-1)
-   [Title 2](#title-2)
`

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
