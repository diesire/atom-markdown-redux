MarkdownReduxView = require './markdown-redux-view'
{CompositeDisposable} = require 'atom'

module.exports = MarkdownRedux =
  markdownReduxView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @markdownReduxView = new MarkdownReduxView(state.markdownReduxViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @markdownReduxView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'markdown-redux:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @markdownReduxView.destroy()

  serialize: ->
    markdownReduxViewState: @markdownReduxView.serialize()

  toggle: ->
    console.log 'MarkdownRedux was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
