import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FileConsumer } from '../../context/FileContext';

export default class Pager extends React.Component {

  render() {
    return (
			<nav aria-label="Page navigation example">
				<ul class="pagination">
          <FileConsumer>
            {({ isFile }) => (
              <>
                  {isFile ? (
										<>
											<li class="page-item"><Link to="/" class="page-link">Previous</Link></li>
											<li class="page-item"><Link to="/publish">Next</Link></li>
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
