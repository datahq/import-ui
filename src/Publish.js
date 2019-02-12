import React, { Component } from 'react';
import { FileConsumer } from './context/FileContext';

class Publish extends Component {
  
  state = {
    uploaded: false
  }

  fileUpload() {
    return (
      <div>No file</div>
    );
  }

  render() {

    return (
      <>
      <main role="main" className="container-fluid">
        <h1>Publish</h1>
        <p className="lead">This is the publish page.</p>
        <FileConsumer>
          {({ isFile, fileUpload  }) => (
            <div>
                {isFile ? (
                  <div><p>We still have a file!</p></div>
                ) : (
                  <div>No file yet.</div> 
                )}
            </div>
          )}
        </FileConsumer>

      </main>
      </>
    );
  }
}

export default Publish;
