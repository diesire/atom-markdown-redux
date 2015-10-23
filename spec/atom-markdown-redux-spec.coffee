AtomMarkdownRedux = require '../lib/atom-markdown-redux'

describe "AtomMarkdown", ->
  [workspaceElement, TEXT_WITH_TOC_01_INPUT, TEXT_WITH_TOC_01_OUTPUT] = []

  beforeEach ->
    TEXT_WITH_TOC_01_INPUT =
    """
    # Table of Contents
    # Title 1
    A paragraph
    # Title 2
    Another paragraph
    """

    TEXT_WITH_TOC_01_OUTPUT =
    """
    # Table of Contents

    -   [Title 1](#title-1)
    -   [Title 2](#title-2)

    # Title 1
    A paragraph
    # Title 2
    Another paragraph
    """

    workspaceElement = atom.views.getView(atom.workspace)

    waitsForPromise ->
      atom.packages.activatePackage('atom-markdown-redux')
    waitsForPromise ->
      atom.workspace.open('empty.md').then (editor) ->
        editor.setText(TEXT_WITH_TOC_01_INPUT)


  describe "waiting for the packages to load", ->
    it 'should have waited long enough', ->
      expect(atom.packages.isPackageActive('atom-markdown-redux')).toBe true
      expect(atom.workspace.getActiveTextEditor().getPath()).toContain 'spec\\fixtures\\empty.md'

    it "editor must be filled", ->
      expect(atom.workspace.getActiveTextEditor().getText()).toEqual TEXT_WITH_TOC_01_INPUT


  describe "when the atom-markdown-redux:toc event is triggered", ->
    it "creates a TOC in the active editor", ->
      atom.commands.dispatch workspaceElement, 'atom-markdown-redux:toc'
      expect(atom.workspace.getActiveTextEditor().getText().length).toEqual TEXT_WITH_TOC_01_OUTPUT.length
      expect(atom.workspace.getActiveTextEditor().getText()).toEqual TEXT_WITH_TOC_01_OUTPUT
