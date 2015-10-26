"use babel";

import Toc  from 'mdast-toc';
import Mdast from 'mdast';

var DEFAULT_HEADING = 'toc|table[ -]of[ -]contents?';

class MarkdownReduxToc {
  constructor(sourceText) {
    this.sourceText = sourceText
    this.mdastToc = Mdast.use(Toc)
    this.sourceAST = this.mdastToc.parse(this.sourceText)
    this.workingAST = this.mdastToc.run(this.sourceAST);
  }

  toc() {
    let toc = {}

    toc.asAST = this.compile()
    console.log(toc.asAST);
    toc.asString = toc.asAST.children.length !== 0 ? this.stringify(toc.asAST): ''

    return toc
  }

  compile() {
    let toc = this._getToc(this.workingAST)
    let tocAST = this.workingAST;
    tocAST.children = []
    if (toc.heading) tocAST.children.push(toc.heading)
    if (toc.body) tocAST.children.push(toc.body)
    return tocAST;
  }

  stringify(tocAST) {
    let tocString = this.mdastToc.stringify(tocAST);
    return tocString;
  }

  _getToc(mdastNode) {
    let toc = {}

    if(mdastNode.children === undefined) {
      // console.log(mdastNode, 'No children');
      return toc = {heading: null, body: null}
    }

    let child;
    for (var i = 0; i < mdastNode.children.length; i++) {
      child = mdastNode.children[i]

      // console.log(child, 'See children')

      if(this._isTocHeading(child)) {
        // console.log('Header found ==>', child);

        if (i >= mdastNode.children.length) {
          console.error('error: header is the latest child of', mdastNode)
          return
        }

        let nextChild = mdastNode.children[i + 1]
        if(this._isTocBody(nextChild)) {
          // console.log('Body found ==>', nextChild);
          return {heading: child, body: nextChild}
        } else {
          // console.log('Missing body');
          return {heading: child, body: null}
        }
      } else {
        // console.log('Children not valid');
      }
    }

    console.log('Try next level');
    for (let child of mdastNode.children) {
      let toc = this._getToc(child)
      if (toc !== undefined ) {
        return toc;
      }
    }
  }

  _toExpression(value) {
    return new RegExp('^(' + value + ')$', 'i');
  }

  _isTocHeading(mdastNode) {
    return mdastNode.type === 'heading'
      && mdastNode.children !== undefined
      && mdastNode.children[0].type === 'text'
      && this._toExpression(DEFAULT_HEADING).test(mdastNode.children[0].value) ? true : false
  }

  _isTocBody(mdastNode) {
    return mdastNode.type === 'list'
      && mdastNode.ordered === false
      && mdastNode.children !== undefined
      && mdastNode.position === undefined
  }
}

export default MarkdownReduxToc;
