import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FileConsumer } from '../../context/FileContext';

export default class Pager extends React.Component {

  step(file, step, stepChange) {
    let pager = (<div/>);
    if (step === "home" && file === false) {
      pager = (<div/>);
    }
    else if (step === "home") {
      pager = (
        <>
        <li className="page-item"><Link data="publish" onClick={stepChange} to="/publish" className="page-link">Next</Link></li>
        </>
      );
    }
    else if (step === "publish") {
      pager = (
        <>
        <li className="page-item"><Link data="home" onClick={stepChange} to="/" className="page-link">Previous</Link></li>
        </>
      );
    }
    return pager;
  }


  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <FileConsumer>
            {({ file, stepChange, step }) => (
              <>
                {file ? (
                  <>
                    {this.step(file, step, stepChange)}
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
