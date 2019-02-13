import React from 'react'

const FileContext = React.createContext()

class FileProvider extends React.Component {
  state = {
    file: false,
    step: "home"
  }

  constructor() {
    super();
    this.fileUpload = this.fileUpload.bind(this);
    this.stepChange = this.stepChange.bind(this);
  }

  nextStep(step) {

  }

  fileUpload() {
    this.setState({ file: true })
  }

  stepChange(e) {
    const step = e.target.attributes.getNamedItem('data').value;
    this.setState({step: step});
  }

  render() {
    return (
      <FileContext.Provider
        value={{
          file: this.state.file,
          fileUpload: this.fileUpload,
          step: this.state.step,
          stepChange: this.stepChange
        }}
      >
        {this.props.children}
      </FileContext.Provider>
    )
  }
}

const FileConsumer = FileContext.Consumer

export { FileProvider, FileConsumer }
