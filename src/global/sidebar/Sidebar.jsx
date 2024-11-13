import React, { useEffect, useRef } from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    // Add event listener for clicks
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <svg
            viewBox="0 0 279 224"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="140.518"
              cy="112.374"
              r="97.1496"
              stroke="url(#paint0_linear_134_1703)"
              stroke-width="1.44999"
            />
            <rect
              x="22.7188"
              y="91.8618"
              width="243.807"
              height="41.0253"
              fill="#0A0F36"
            />
            <path
              d="M37.4403 126.657H30.7356V104.105L21.9211 126.657H19.0141L10.1996 104.105V126.657H3.54174V95.3839H12.8721L20.4676 114.935L28.0631 95.3839H37.4403V126.657ZM72.8144 126.657H65.2657L63.2965 121.359H49.8871L47.9179 126.657H40.3693L52.419 95.3839H60.7647L72.8144 126.657ZM61.468 115.498L56.5918 102.042L51.7157 115.498H61.468ZM103.693 126.657H97.2699L82.3601 106.261V126.657H75.7023V95.3839H82.5476L97.0354 115.029V95.3839H103.693V126.657ZM125.238 126.657H118.58V113.857L106.577 95.3839H114.173L121.909 107.902L129.645 95.3839H137.194L125.238 113.857V126.657ZM153.393 127.219C143.969 127.219 136.701 120.655 136.701 111.044C136.701 101.385 143.969 94.8681 153.393 94.8681C160.238 94.8681 164.224 98.5721 166.427 102.511L160.707 105.324C159.394 102.792 156.581 100.776 153.393 100.776C147.673 100.776 143.547 105.136 143.547 111.044C143.547 116.951 147.673 121.312 153.393 121.312C156.581 121.312 159.394 119.296 160.707 116.764L166.427 119.53C164.224 123.422 160.238 127.219 153.393 127.219ZM185.253 127.219C175.782 127.219 168.89 120.468 168.89 111.044C168.89 101.62 175.782 94.8681 185.253 94.8681C194.677 94.8681 201.569 101.62 201.569 111.044C201.569 120.468 194.677 127.219 185.253 127.219ZM185.253 121.312C191.02 121.312 194.724 116.858 194.724 111.044C194.724 105.183 191.02 100.776 185.253 100.776C179.439 100.776 175.735 105.183 175.735 111.044C175.735 116.858 179.439 121.312 185.253 121.312ZM212.899 126.657H206.241V95.3839H212.899V126.657ZM247.099 126.657H240.675L225.765 106.261V126.657H219.108V95.3839H225.953L240.441 115.029V95.3839H247.099V126.657ZM264.424 127.219C258.375 127.219 254.062 125.203 251.108 122.25L254.765 117.045C256.969 119.343 260.392 121.312 264.705 121.312C268.409 121.312 270.144 119.671 270.144 117.842C270.144 112.404 252.14 116.201 252.14 104.433C252.14 99.2285 256.641 94.915 264.002 94.915C268.972 94.915 273.098 96.4154 276.192 99.2754L272.488 104.245C269.956 101.901 266.58 100.823 263.392 100.823C260.579 100.823 258.985 102.042 258.985 103.917C258.985 108.84 276.942 105.511 276.942 117.186C276.942 122.906 272.816 127.219 264.424 127.219Z"
              fill="white"
            />
            <circle cx="64.2468" cy="47.8498" r="15.9499" fill="white" />
            <circle
              cx="15.9499"
              cy="15.9499"
              r="15.9499"
              transform="matrix(1 0 0 -1 48.2969 187.049)"
              fill="white"
            />
            <circle cx="213.596" cy="47.8498" r="15.9499" fill="white" />
            <circle
              cx="15.9499"
              cy="15.9499"
              r="15.9499"
              transform="matrix(1 0 0 -1 197.646 187.049)"
              fill="white"
            />
            <circle cx="142.547" cy="15.9499" r="15.9499" fill="white" />
            <circle
              cx="15.9499"
              cy="15.9499"
              r="15.9499"
              transform="matrix(1 0 0 -1 126.597 223.299)"
              fill="white"
            />
            <g clip-path="url(#clip0_134_1703)">
              <path
                d="M149.761 214.419C148.476 215.771 146.831 216.515 145.129 216.515C142.339 216.515 139.923 214.556 138.787 211.724H146.536C147.208 211.724 147.752 211.179 147.752 210.507C147.752 209.835 147.208 209.291 146.536 209.291H138.168C138.12 208.893 138.094 208.487 138.094 208.074C138.094 207.608 138.127 207.151 138.188 206.705H146.536C147.208 206.705 147.752 206.16 147.752 205.488C147.752 204.816 147.208 204.271 146.536 204.271H138.851C140.013 201.522 142.389 199.632 145.129 199.632C146.831 199.632 148.476 200.377 149.761 201.728C150.223 202.215 150.993 202.235 151.481 201.772C151.968 201.309 151.987 200.539 151.525 200.052C149.776 198.212 147.505 197.199 145.129 197.199C141.073 197.199 137.605 200.145 136.26 204.272H132.999C132.327 204.272 131.782 204.817 131.782 205.489C131.782 206.16 132.327 206.705 132.999 206.705H135.738C135.689 207.154 135.661 207.61 135.661 208.074C135.661 208.486 135.682 208.891 135.722 209.291H132.999C132.327 209.291 131.782 209.836 131.782 210.508C131.782 211.18 132.327 211.724 132.999 211.724H136.211C137.52 215.931 141.023 218.949 145.129 218.949C147.505 218.949 149.775 217.936 151.524 216.097C151.987 215.61 151.968 214.84 151.48 214.376C150.993 213.913 150.223 213.933 149.761 214.419Z"
                fill="#1F2A85"
              />
            </g>
            <path
              d="M147.921 15.5269C148.435 14.8727 148.755 14.0875 148.844 13.2605C148.934 12.4336 148.789 11.5981 148.428 10.8491C148.066 10.1002 147.501 9.46768 146.798 9.02365C146.095 8.57962 145.281 8.34184 144.449 8.33735H143.815V6.22278H142.123V8.33735H140.431V6.22278H138.74V8.33735H135.356V10.8748H137.894V21.0248H135.356V23.5623H138.74V25.6769H140.431V23.5623H142.123V25.6769H143.815V23.5623H145.295C149.566 23.5623 151.376 18.0644 147.921 15.5269ZM140.431 10.8748C144.584 10.8748 145.083 10.693 145.794 11.4331C146.06 11.6992 146.241 12.0382 146.314 12.4071C146.387 12.7761 146.35 13.1585 146.206 13.506C146.062 13.8536 145.818 14.1507 145.506 14.3598C145.193 14.569 144.825 14.6807 144.449 14.6811H140.431V10.8748ZM145.295 21.0248H140.431V17.2186H145.295C145.545 17.2179 145.793 17.2668 146.023 17.3627C146.254 17.4585 146.464 17.5993 146.64 17.7768C146.906 18.043 147.087 18.3819 147.16 18.7509C147.233 19.1198 147.196 19.5022 147.052 19.8498C146.908 20.1973 146.664 20.4944 146.351 20.7035C146.039 20.9127 145.671 21.0245 145.295 21.0248Z"
              fill="#1F2B87"
            />
            <path
              d="M63.5214 49.9414L58.3957 48.2286L63.5214 45.6658L68.6471 48.2286L63.5214 49.9414ZM63.5214 51.8953C63.4177 51.8971 63.3145 51.8799 63.2169 51.8446L57.9123 50.0759C57.8362 50.0503 57.7541 50.0494 57.6775 50.0733C57.6009 50.0973 57.5338 50.1447 57.4859 50.209C57.4379 50.2733 57.4114 50.3512 57.4103 50.4314C57.4092 50.5116 57.4335 50.5901 57.4796 50.6557L62.6714 58.0995C62.7661 58.2374 62.8931 58.3501 63.0411 58.4281C63.1892 58.506 63.3541 58.5467 63.5214 58.5467C63.6888 58.5467 63.8536 58.506 64.0017 58.4281C64.1498 58.3501 64.2767 58.2374 64.3715 58.0995L69.5632 50.6557C69.6093 50.5901 69.6336 50.5116 69.6325 50.4314C69.6314 50.3512 69.605 50.2733 69.557 50.209C69.509 50.1447 69.4419 50.0973 69.3653 50.0733C69.2888 50.0494 69.2066 50.0503 69.1305 50.0759L63.8259 51.8446C63.7283 51.8799 63.6252 51.8971 63.5214 51.8953ZM63.9528 43.75L69.2308 46.3877C69.3035 46.4255 69.3865 46.4388 69.4673 46.4257C69.5482 46.4125 69.6227 46.3736 69.6797 46.3148C69.7368 46.2559 69.7733 46.1802 69.7838 46.0989C69.7943 46.0177 69.7784 45.9352 69.7383 45.8637L64.4349 36.239C64.3435 36.0772 64.2107 35.9426 64.0502 35.8489C63.8897 35.7553 63.7072 35.7059 63.5214 35.7059C63.3356 35.7059 63.1531 35.7553 62.9926 35.8489C62.8321 35.9426 62.6993 36.0772 62.6079 36.239L57.3046 45.8637C57.2645 45.9352 57.2485 46.0177 57.259 46.0989C57.2696 46.1802 57.3061 46.2559 57.3631 46.3148C57.4201 46.3736 57.4946 46.4125 57.5755 46.4257C57.6564 46.4388 57.7393 46.4255 57.8121 46.3877L63.09 43.75C63.2252 43.6873 63.3724 43.6548 63.5214 43.6548C63.6704 43.6548 63.8176 43.6873 63.9528 43.75Z"
              fill="#212D8A"
            />
            <g clip-path="url(#clip1_134_1703)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M213.593 36.587C219.812 36.587 224.853 41.6284 224.853 47.8472C224.853 54.0659 219.812 59.1073 213.593 59.1073C207.374 59.1073 202.333 54.0659 202.333 47.8472C202.333 41.6284 207.374 36.587 213.593 36.587ZM206.143 52.6744H210.152V48.6927L213.572 52.3747L213.593 52.348L213.615 52.3747L217.04 48.6927V52.6744H221.048C219.464 55.1149 216.719 56.7257 213.593 56.7257C210.473 56.7257 207.728 55.1149 206.143 52.6744ZM221.942 50.8763H218.667V43.5176L213.593 49.8487L213.395 49.7738L208.525 43.5176V50.8763H205.25C204.907 49.9343 204.72 48.9122 204.72 47.8472C204.72 42.9449 208.691 38.9739 213.593 38.9739C218.495 38.9739 222.472 42.9449 222.472 47.8472C222.472 48.9122 222.284 49.9343 221.942 50.8763Z"
                fill="#202C88"
              />
            </g>
            <g clip-path="url(#clip2_134_1703)">
              <path
                d="M220.847 178.349V179.799H206.347V178.349C207.543 178.349 208.522 177.37 208.522 176.174V172.549H206.347V171.099H208.522V168.199C208.522 165.002 211.124 162.399 214.322 162.399C217.519 162.399 219.795 164.676 219.897 164.777L218.896 165.829C218.896 165.829 216.787 163.857 214.322 163.857C211.857 163.857 209.972 165.807 209.972 168.207V171.107H217.947V172.557H209.972V176.181C209.972 176.993 209.703 177.747 209.247 178.356H220.847V178.349Z"
                fill="#202C88"
              />
            </g>
            <g clip-path="url(#clip3_134_1703)">
              <path
                d="M69.465 175.856C69.4777 174.135 68.7974 172.775 67.4407 171.814C66.3928 171.074 65.1211 170.688 63.8911 170.317C61.3289 169.54 60.5856 169.131 60.5856 167.906C60.5856 166.541 62.3594 166.055 63.8778 166.055C64.9836 166.055 66.2559 166.399 67.046 166.908L68.6124 164.482C67.5798 163.813 66.1665 163.356 64.7709 163.215V160.949H61.8814V163.374C59.3128 163.939 57.6947 165.617 57.6947 167.906C57.6947 169.508 58.3606 170.779 59.6702 171.675C60.6662 172.36 61.8809 172.727 63.0543 173.083C65.5675 173.842 66.588 174.305 66.5764 175.838L66.5764 175.85C66.5764 177.136 64.8712 177.594 63.4104 177.594C62.0305 177.594 60.5299 176.989 59.6793 176.09L57.5801 178.075C58.6573 179.215 60.2224 180.02 61.8813 180.336V182.699H64.7709V180.387C67.6251 179.978 69.4622 178.26 69.465 175.856Z"
                fill="#1F2A82"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_134_1703"
                x1="140.518"
                y1="14.4999"
                x2="140.518"
                y2="210.249"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.38" />
                <stop offset="0.25" stop-color="white" stop-opacity="0.32" />
                <stop offset="0.503704" stop-color="white" />
                <stop offset="0.753" stop-color="white" stop-opacity="0.08" />
                <stop offset="1" stop-color="white" stop-opacity="0.27" />
              </linearGradient>
              <clipPath id="clip0_134_1703">
                <rect
                  width="21.7499"
                  height="21.7499"
                  fill="white"
                  transform="translate(130.946 197.199)"
                />
              </clipPath>
              <clipPath id="clip1_134_1703">
                <rect
                  width="23.1999"
                  height="23.1999"
                  fill="white"
                  transform="translate(201.996 36.2499)"
                />
              </clipPath>
              <clipPath id="clip2_134_1703">
                <rect
                  width="17.3999"
                  height="17.3999"
                  fill="white"
                  transform="translate(204.896 162.399)"
                />
              </clipPath>
              <clipPath id="clip3_134_1703">
                <rect
                  width="21.7499"
                  height="21.7499"
                  fill="white"
                  transform="translate(52.6475 160.949)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>
            Welcome To The Many Coins Website.
            <br />
            The Reliable Place Where We Can Help You ....
            <span className="more-link">More+</span>
          </p>
          <nav className="sidebar-links">
            <a href="#what">What Does Many Coins Do?</a>
            <a href="#why" className="active">
              Why Many Coins?
            </a>
            <a href="#where">Where Can I Find Many Coins?</a>
          </nav>
          <div className="social-icons">
            {/* <FaFacebook className="social-icon" /> */}
            {/* Add more social icons here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;