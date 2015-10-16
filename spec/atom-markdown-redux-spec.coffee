AtomMarkdownRedux = require '../lib/atom-markdown-redux'

describe "AtomMarkdown", ->
  [workspaceElement, activationPromise] = []

  beforeEach ->
    workspaceElement = atom.views.getView(atom.workspace)
    activationPromise = atom.packages.activatePackage('atom-markdown-redux')

  describe "when the atom-markdown-redux:toggle event is triggered", ->
    it "hides and shows the modal panel", ->
      # Before the activation event the view is not on the DOM, and no panel
      # has been created
      expect(workspaceElement.querySelector('.atom-markdown-redux')).not.toExist()

      # This is an activation event, triggering it will cause the package to be
      # activated.
      atom.commands.dispatch workspaceElement, 'atom-markdown-redux:toggle'

      waitsForPromise ->
        activationPromise

      runs ->
        expect(workspaceElement.querySelector('.atom-markdown-redux')).toExist()

        atomMarkdownReduxElement = workspaceElement.querySelector('.atom-markdown-redux')
        expect(atomMarkdownReduxElement).toExist()

        atomMarkdownReduxPanel = atom.workspace.panelForItem(atomMarkdownReduxElement)
        expect(atomMarkdownReduxPanel.isVisible()).toBe true
        atom.commands.dispatch workspaceElement, 'atom-markdown-redux:toggle'
        expect(atomMarkdownReduxPanel.isVisible()).toBe false

    it "hides and shows the view", ->
      # This test shows you an integration test testing at the view level.

      # Attaching the workspaceElement to the DOM is required to allow the
      # `toBeVisible()` matchers to work. Anything testing visibility or focus
      # requires that the workspaceElement is on the DOM. Tests that attach the
      # workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement)

      expect(workspaceElement.querySelector('.atom-markdown-redux')).not.toExist()

      # This is an activation event, triggering it causes the package to be
      # activated.
      atom.commands.dispatch workspaceElement, 'atom-markdown-redux:toggle'

      waitsForPromise ->
        activationPromise

      runs ->
        # Now we can test for view visibility
        atomMarkdownReduxElement = workspaceElement.querySelector('.atom-markdown-redux')
        expect(atomMarkdownReduxElement).toBeVisible()
        atom.commands.dispatch workspaceElement, 'atom-markdown-redux:toggle'
        expect(atomMarkdownReduxElement).not.toBeVisible()
