import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FileConsumer } from '../../context/FileContext';

export default class NavBar extends React.Component {

  render() {
    return (
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <FileConsumer>
            {({ isFile, fileUpload  }) => (
              <>
                  {isFile ? (
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/publish">Publish</Link></li>
                  ) : (
                    ''
                  )}
              </>
            )}
          </FileConsumer>
				</ol>
			</nav>
    );
  }
}

