import React from "react";
import "./css/SidebarOptions.css";
import Add from  '@material-ui/icons/Add'
export default function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img src="https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png" alt=""/>
        <p>C++</p>
      </div>

      <div className="sidebarOption">
        <img src="https://e7.pngegg.com/pngimages/396/878/png-clipart-java-development-kit-programmer-java-runtime-environment-programming-language-java-orange-logo.png" alt=""/>
        <p>Java</p>
      </div>

      <div className="sidebarOption">
        <img src="https://w7.pngwing.com/pngs/447/294/png-transparent-python-javascript-logo-clojure-python-logo-blue-angle-text-thumbnail.png" alt=""/>
        <p>Python</p>
      </div>

      <div className="sidebarOption">
        <img src="https://e7.pngegg.com/pngimages/78/465/png-clipart-data-structures-and-algorithms-algorithms-data-structures-programs-computer-science-others-miscellaneous-computer-science-thumbnail.png" alt="" />
        <p>DSA</p>
      </div>

      <div className="sidebarOption">
        <img src="https://img.favpng.com/23/5/9/web-development-web-design-software-development-web-developer-png-favpng-mbCGqwpp8f0gqqSfgwXAsyQGq.jpg" alt=""/>
        <p>Web Development</p>
      </div>

      <div className="sidebarOption">
        <img src="https://w7.pngwing.com/pngs/163/279/png-transparent-android-software-development-computer-icons-bionic-android-text-logo-grass.png" alt=""/>
        <p>Android Development</p>
      </div>

      <div className="sidebarOption">
        <img src="https://img.freepik.com/premium-vector/brain-technology-unique-logo_414847-335.jpg?w=2000" alt=""/>
        <p>Machine Learning</p>
      </div>

      <div className="sidebarOption">
        <img src="https://img.freepik.com/premium-vector/vector-book-icon-logo-is-stack-books-stack-albums-art-book-hobby-reading_562582-125.jpg?w=2000" alt=""/>
        <p>Core Subjects</p>
      </div>

      <div className="sidebarOption">
        <Add/>
        <p>Discover Space</p>
      </div>
    </div>
  );
}
