import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FileConsumer } from '../../context/FileContext';

export default class FileUpload extends React.Component {

  render() {
    const { upload } = this.props; 
    return (
      <div className="file-upload">
        <div className="file-upload-wrap">
          <input className="file-upload-input" type='file' onChange={upload} accept="file/*" />
          <div className="drag-text">
            <h3>Drag and drop a file or select add File</h3>
          </div>
        </div>
        <div className="file-upload-content">
          <img className="file-upload-file" src="#" alt="your file" />
          <div className="file-title-wrap">
            <button type="button" onClick={upload} className="remove-file">Remove <span className="file-title">Uploaded File</span></button>
          </div>
        </div>
      </div>
    );
  }
}

