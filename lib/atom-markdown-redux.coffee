MarkdownRedux = require './markdown-redux'
AtomMarkdownReduxView = require './atom-markdown-redux-view'
{CompositeDisposable} = require 'atom'

module.exports = AtomMarkdownRedux =
  atomMarkdownReduxView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @atomMarkdownReduxView = new AtomMarkdownReduxView(state.atomMarkdownReduxViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @atomMarkdownReduxView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'atom-markdown-redux:toggle': => @toggle()
    @subscriptions.add atom.commands.add 'atom-workspace', 'atom-markdown-redux:toc': => @toc()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @atomMarkdownReduxView.destroy()

  serialize: ->
    atomMarkdownReduxViewState: @atomMarkdownReduxView.serialize()

  toggle: ->
    console.log 'AtomMarkdownRedux was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()

  toc: ->
    console.log 'AtomMarkdownRedux creating TOC!'

    sourceText = atom.workspace.getActiveTextEditor().getText()
    outputText = new MarkdownRedux().toc sourceText
    atom.workspace.getActiveTextEditor().setText outputText
