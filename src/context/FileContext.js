import React from 'react'

const FileContext = React.createContext()

class FileProvider extends React.Component {
  state = { isFile: false }

  constructor() {
    super()
    this.fileUpload = this.fileUpload.bind(this)
  }

  fileUpload() {
    this.setState({ isFile: true })
  }

  render() {
    return (
      <FileContext.Provider
        value={{
          isFile: this.state.isFile,
          fileUpload: this.fileUpload,
        }}
      >
        {this.props.children}
      </FileContext.Provider>
    )
  }
}

const FileConsumer = FileContext.Consumer

export { FileProvider, FileConsumer }

