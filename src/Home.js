import React, { Component } from 'react';
import FileUpload from './components/FileUpload';

import { FileConsumer } from './context/FileContext';

class Home extends Component {

  render() {
                  //<button onClick={fileUpload}>Upload</button>

    return (
      <>
      <main role="main" className="container-fluid">
        <h1>Welcome</h1>
        <p className="lead">This is the home page.</p>
        <FileConsumer>
          {({ isFile, fileUpload  }) => (
            <div>
                {isFile ? (
                  <div>We have file</div>
                ) : (
                  <FileUpload />
                )}
            </div>
          )}
        </FileConsumer>
      </main>
      </>
    );
  }
}

export default Home;
