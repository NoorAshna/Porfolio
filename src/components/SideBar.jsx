import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Copy,
  RotateCcw,
  Square,
  File as FileIcon,
  Folder as FolderIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SideImg from './SideImg';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-dark text-light p-2" style={{width : "13rem"}} >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fw-bold">EXPLORER</span>
        <div>
          <button className="btn btn-dark btn-sm p-0 me-1">
            <Copy size={16} />
          </button>
          <button className="btn btn-dark btn-sm p-0 me-1">
            <Square size={16} />
          </button>
          <button className="btn btn-dark btn-sm p-0">
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      <div>
        <button
          className="btn btn-dark text-center w-100 d-flex align-items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <FolderIcon size={16} className="ms-1 me-2 " />
          <span >PORTFOLIO</span>
        </button>

        {isOpen && (
          <div className="ms-3 mt-2">
            <Link to="sidebar" className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
              <ChevronRight size={16} />
              <FolderIcon size={16} className="ms-1 me-2" />
              <span>dist</span>
            </Link>
            <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
              <ChevronRight size={16} />
              <FolderIcon size={16} className="ms-1 me-2" />
              <span>node_modules</span>
            </button>
            <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
              <ChevronRight size={16} />
              <FolderIcon size={16} className="ms-1 me-2" />
              <span>public</span>
            </button>
            <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1 active">
              <ChevronRight size={16} />
              <FolderIcon size={16} className="ms-1 me-2" />
              <span>src</span>
            </button>

            {/* File Content */}
            {/* <div className="ms-4 mt-1">
              <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
                <FileIcon size={16} className="me-2" />
                <span>.gitignore</span>
              </button>
              <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
                <FileIcon size={16} className="me-2" />
                <span>eslint.config.js</span>
              </button>
              <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
                <FileIcon size={16} className="me-2" />
                <span>index.html</span>
              </button>
              <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
                <FileIcon size={16} className="me-2" />
                <span>package-lock.json</span>
              </button>
              <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
                <FileIcon size={16} className="me-2" />
                <span>package.json</span>
              </button>
              <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
                <FileIcon size={16} className="me-2" />
                <span>README.md</span>
              </button>
              <button className="btn btn-dark text-start w-100 d-flex align-items-center mb-1">
                <FileIcon size={16} className="me-2" />
                <span>vite.config.js</span>
              </button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
