import React, { Component } from 'react';

import { FileConsumer } from './context/FileContext';

class Home extends Component {

	render() {

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
									<button onClick={fileUpload}>Upload</button>
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
