import React, { Component } from 'react';
import FileUpload from './components/FileUpload';

import { FileConsumer } from './context/FileContext';

class Home extends Component {

  render() {

    return (
      <>
      <main role="main" className="container-fluid">
        <h1>Welcome</h1>
        <p className="lead">This is the home page.</p>
        <FileConsumer>
          {({ file, fileUpload  }) => (
            <div>
                {file ? (
                  <div><p>We have a file!</p></div>
                ) : (
                  <FileUpload upload={fileUpload} />
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
