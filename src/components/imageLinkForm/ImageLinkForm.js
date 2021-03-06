import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This magic glasses will detect faces, you are warned!"}
      </p>
      <div className="center">
        <div className="form center pa4 br3">
          <input
            className="f4 pa2 w-70 center"
            placeholder="Paste an url from a image with a face"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib bg-light-blue"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
