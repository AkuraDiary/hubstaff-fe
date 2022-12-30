import React from "react";

export const Header = () => {
  return (
    <div className="Header">
      <nav
        className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between align-items-center px-5"
        style={{
          backgroundColor: "#FFFFFF",
          color: "white",
          height: "80px",
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        <div className="dropdown">
            <ul className="dropdown-menu">
                <li>
                    <a href="index.html" className="dropdown-item">Yea</a>
                </li>
            </ul>
        </div>
        {/* <div className="dropdown text-end">
          <span>Name</span>

          <ul className="dropdown-menu text-small mt-2">
            <li>
              <p className="text-center">Name</p>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item"
                href="index.html"
                style={{color: "black"}}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="index.html"
                style={{color: "black"}}
              >
                My NFT
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="index.html"
                style={{color: "black"}}
              >
                Create NFT
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <hr className="dropdown-divider" />
            <li>
              <form action="logout" method="POST">
                <button type="submit" className="dropdown-item">
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
};
