import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FileConsumer } from '../../context/FileContext';

export default class Pager extends React.Component {

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <FileConsumer>
            {({ isFile }) => (
              <>
                  {isFile ? (
                    <>
                      <li className="page-item"><Link to="/" className="page-link">Previous</Link></li>
                      <li className="page-item"><Link to="/publish" className="page-link">Next</Link></li>
                    </>
                  ) : (
                    ''
                  )}
              </>
            )}
          </FileConsumer>
        </ul>
      </nav>
    );
  }
}
