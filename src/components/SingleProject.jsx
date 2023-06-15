import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { projects } from "../data/data";
import "../css/SingleProject.scss"
import NavBar from './Navbar'
const SingleProject = () => {
    let { id } = useParams();
    const project = projects[id-1];
  return (
    <div className="container">
      <NavBar/>
      <div className="singleproject">

        <h2>{project.project_name}</h2> 

        <img src={project.images[0]} />

        <h5>DISCRIPTION</h5>

        <p>{project.description}</p>

        <div className="icon-data">
          <svg width="25px" height="25px" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8209 0.0864245C20.1979 0.467994 16.7709 2.1116 14.1648 4.71759C11.061 7.82119 9.42207 11.7977 9.42207 16.2249C9.42207 20.1759 10.6683 24.1357 13.3117 28.5842C13.7019 29.2405 14.9846 31.1727 15.1751 31.3909C15.2507 31.4774 15.3126 31.5768 15.3126 31.6117C15.3126 31.6467 13.6096 31.688 11.528 31.7036C8.23133 31.7282 7.72303 31.7522 7.58547 31.8899C7.34522 32.1303 2.35347 44.286 2.35347 44.6307C2.35347 45.1975 3.03193 45.5352 3.48351 45.193C3.58409 45.1168 3.83909 44.636 4.05002 44.1247L4.43351 43.195L6.98416 43.1683L9.53492 43.1417L9.37751 43.5172C9.29098 43.7237 8.69766 45.1599 8.05907 46.7086L6.89793 49.5246H4.36582C2.38029 49.5246 1.84438 49.4976 1.88306 49.4C1.91017 49.3315 2.10117 48.8552 2.30752 48.3417C2.60608 47.599 2.66409 47.3548 2.59162 47.1486C2.46143 46.7785 2.04315 46.5649 1.68737 46.687C1.36688 46.7969 1.16113 47.174 0.406116 49.0348C-0.124012 50.3412 -0.131189 50.642 0.361457 50.8918C0.558934 50.992 5.66652 51.0127 25.6139 50.9936L50.6189 50.9699L50.8094 50.7346C50.9143 50.6052 51 50.4129 51 50.3074C51 50.0348 43.5695 32.0841 43.3769 31.8913C43.2376 31.7518 42.7435 31.7283 39.433 31.7036C37.3515 31.688 35.6484 31.6467 35.6484 31.6117C35.6484 31.5768 35.7103 31.4774 35.7859 31.3909C35.9764 31.1727 37.2591 29.2405 37.6493 28.5842C40.2927 24.1357 41.5389 20.1759 41.5389 16.2249C41.5389 11.7977 39.9 7.82119 36.7962 4.71759C33.3682 1.28984 28.5893 -0.415856 23.8209 0.0864245ZM26.8905 1.5837C31.6353 2.06305 35.7379 4.73514 38.1276 8.9025C40.0168 12.1971 40.53 16.018 39.6207 20.0197C38.5616 24.6807 35.7222 29.6246 31.1972 34.6866C29.572 36.5044 25.7559 40.1548 25.4805 40.1548C25.1336 40.1548 20.3598 35.4537 18.7491 33.5261C14.2174 28.1024 11.7132 23.1761 11.0304 18.3419C10.8671 17.1855 10.8841 15.0662 11.0657 13.9378C12.2089 6.83347 18.1224 1.66175 25.2955 1.49269C25.6049 1.48541 26.3227 1.52638 26.8905 1.5837ZM24.644 9.35624C23.4997 9.49579 22.1545 10.0256 21.5785 10.5634C21.2218 10.8967 21.2001 11.3246 21.5244 11.6293C21.8461 11.9314 22.0714 11.9036 22.9603 11.4516C23.9225 10.9624 24.4962 10.8267 25.5802 10.832C26.6372 10.8371 27.531 11.1013 28.3568 11.6527C31.2931 13.6134 31.6952 17.5674 29.211 20.0514C27.1291 22.1332 23.8319 22.1332 21.75 20.0514C20.1562 18.4577 19.7241 16.4146 20.5086 14.1827L20.8378 13.2463L20.6322 12.9698C20.3777 12.6274 19.8705 12.5474 19.5861 12.8046C19.3479 13.0203 19.0527 13.6739 18.8305 14.4782C18.7148 14.8973 18.6639 15.4565 18.6667 16.2817C18.6702 17.2978 18.7103 17.5979 18.933 18.2753C19.302 19.3974 19.8281 20.2461 20.6999 21.1258C21.9515 22.3885 23.6839 23.1062 25.4805 23.1062C28.4463 23.1062 31.1092 21.1429 32.0143 18.2891C32.5585 16.5737 32.4226 14.8378 31.6155 13.1917C30.8796 11.6911 29.9065 10.7195 28.4212 10.0021C27.1749 9.4 25.9716 9.19426 24.644 9.35624ZM13.5724 33.3517C13.5356 33.4476 13.1211 34.4568 12.6512 35.5945L11.7968 37.6628H9.25988C7.80687 37.6628 6.73724 37.6246 6.75628 37.5735C6.77452 37.5243 7.19051 36.5151 7.68057 35.3307L8.57165 33.1772H11.1055C13.4776 33.1772 13.635 33.1884 13.5724 33.3517ZM17.5695 34.4482C19.6411 36.895 24.2836 41.4005 25.1884 41.8424C25.609 42.0479 25.8233 41.9175 27.512 40.4289L28.9537 39.158H33.2979C37.5093 39.158 37.6482 39.1519 37.8415 38.9586C38.1102 38.69 38.1049 38.1503 37.8311 37.9025C37.6345 37.7244 37.3995 37.7108 34.0319 37.6841L30.4425 37.6555L31.3268 36.7372C31.8131 36.232 32.7199 35.2245 33.3418 34.498L34.4726 33.1772H38.431H42.3894L43.2805 35.3307C43.7705 36.5151 44.1856 37.5218 44.2028 37.5678C44.2201 37.6138 43.2904 37.6653 42.137 37.682C40.1352 37.7112 40.0298 37.7225 39.8224 37.9301C39.683 38.0697 39.6084 38.2627 39.6142 38.4686C39.632 39.09 39.684 39.1029 42.4018 39.158L44.862 39.2078L45.381 40.4289L45.9 41.6499H38.1049C29.6162 41.6499 29.9692 41.6263 29.8242 42.2043C29.7883 42.3473 29.7853 42.5475 29.8176 42.6493C29.8499 42.7511 31.5885 44.3284 33.6811 46.1545L37.4859 49.4747L35.3229 49.5015L33.1599 49.5284L25.4677 42.9833C21.2369 39.3835 17.6505 36.3911 17.498 36.3336C17.1213 36.1913 16.7825 36.3572 16.5832 36.7812C16.4672 37.0278 11.6643 48.6165 11.3533 49.4C11.3171 49.4913 10.934 49.5246 9.9189 49.5246C9.15721 49.5246 8.53397 49.5107 8.53397 49.4938C8.53397 49.4768 9.15442 47.9629 9.91272 46.1296C10.6709 44.2962 11.3228 42.6708 11.3612 42.5175C11.4182 42.2899 11.377 42.1848 11.1366 41.9444L10.8421 41.6499H7.95161H5.06103L5.58009 40.4289L6.09925 39.2078L9.34402 39.1816C12.5613 39.1555 12.5906 39.1534 12.789 38.9324C12.8989 38.8097 13.4752 37.5207 14.0694 36.0679C14.6636 34.6151 15.1919 33.3704 15.2434 33.3018C15.2994 33.2273 15.569 33.1772 15.9152 33.1772H16.4934L17.5695 34.4482ZM24.2308 43.8927L30.7893 49.4747L26.2832 49.5006C23.8048 49.5149 19.7885 49.5149 17.3579 49.5006L12.9388 49.4747L15.2472 43.8701C16.5168 40.7875 17.5818 38.2756 17.6139 38.2881C17.646 38.3005 20.6236 40.8226 24.2308 43.8927ZM47.8167 46.3205C48.5258 48.0394 49.106 49.4636 49.106 49.4853C49.106 49.5068 47.0088 49.523 44.4457 49.5211L39.7854 49.5177L36.1967 46.3725C34.2229 44.6427 32.589 43.2085 32.5659 43.1856C32.5426 43.1626 35.6745 43.1553 39.5256 43.1693L46.5276 43.195L47.8167 46.3205Z" fill="#0061E0"/>
          </svg>
          <h4>{project.location}</h4>
        </div>

        <div className="icon-data">
        <svg width="25px" height="25px" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.45845 14.5816C1.07165 14.5816 0.700685 14.428 0.427172 14.1545C0.153658 13.8809 0 13.51 0 13.1232V1.45845C0 1.07165 0.153658 0.700685 0.427172 0.427172C0.700685 0.153658 1.07165 0 1.45845 0H13.1261C13.5129 0 13.8839 0.153658 14.1574 0.427172C14.4309 0.700685 14.5845 1.07165 14.5845 1.45845V13.1232C14.5845 13.51 14.4309 13.8809 14.1574 14.1545C13.8839 14.428 13.5129 14.5816 13.1261 14.5816H1.45845ZM21.8768 14.5816C21.49 14.5816 21.1191 14.428 20.8455 14.1545C20.572 13.8809 20.4184 13.51 20.4184 13.1232V1.45845C20.4184 1.07165 20.572 0.700685 20.8455 0.427172C21.1191 0.153658 21.49 0 21.8768 0H33.5415C33.9283 0 34.2993 0.153658 34.5728 0.427172C34.8463 0.700685 35 1.07165 35 1.45845V13.1232C35 13.51 34.8463 13.8809 34.5728 14.1545C34.2993 14.428 33.9283 14.5816 33.5415 14.5816H21.8768ZM1.45845 35C1.07165 35 0.700685 34.8463 0.427172 34.5728C0.153658 34.2993 0 33.9284 0 33.5415V21.8739C0 21.4871 0.153658 21.1161 0.427172 20.8426C0.700685 20.5691 1.07165 20.4155 1.45845 20.4155H13.1261C13.5129 20.4155 13.8839 20.5691 14.1574 20.8426C14.4309 21.1161 14.5845 21.4871 14.5845 21.8739V33.5415C14.5845 33.9284 14.4309 34.2993 14.1574 34.5728C13.8839 34.8463 13.5129 35 13.1261 35H1.45845ZM21.8768 35C21.49 35 21.1191 34.8463 20.8455 34.5728C20.572 34.2993 20.4184 33.9284 20.4184 33.5415V21.8739C20.4184 21.4871 20.572 21.1161 20.8455 20.8426C21.1191 20.5691 21.49 20.4155 21.8768 20.4155H33.5415C33.9283 20.4155 34.2993 20.5691 34.5728 20.8426C34.8463 21.1161 35 21.4871 35 21.8739V33.5415C35 33.9284 34.8463 34.2993 34.5728 34.5728C34.2993 34.8463 33.9283 35 33.5415 35H21.8768Z" fill="#0061E0"/>
        </svg>
        <h4>{project.sqft}</h4>
        </div>

        <div className="icon-data">
        <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1109 1.99816C17.6076 3.09399 15.4881 4.05897 15.4007 4.14253C15.2469 4.28969 15.2419 4.33662 15.2419 5.64114C15.2419 6.97679 15.2433 6.98921 15.4152 7.16099C15.641 7.38698 15.8336 7.3795 16.4062 7.12253C16.6658 7.00608 16.891 6.9108 16.9068 6.9108C16.9226 6.9108 16.9355 7.64126 16.9355 8.53405V10.1573H9.20549H1.47543L1.30227 10.3306C1.13362 10.4992 1.12903 10.5321 1.12903 11.5688C1.12903 12.6055 1.13362 12.6385 1.30227 12.8071C1.46908 12.974 1.5105 12.9803 2.4313 12.9803H3.3871V14.3918V15.8034H2.4313C1.5105 15.8034 1.46908 15.8097 1.30227 15.9766C1.13362 16.1452 1.12903 16.1782 1.12903 17.2149C1.12903 18.2516 1.13362 18.2845 1.30227 18.4531C1.44446 18.5954 1.54536 18.6264 1.86678 18.6264H2.25806V25.4017V32.177H1.30227C0.381472 32.177 0.34005 32.1833 0.173236 32.3502C0.00458668 32.5188 0 32.5518 0 33.5885C0 34.6252 0.00458668 34.6581 0.173236 34.8267L0.346401 35H17.5H34.6536L34.8268 34.8267C34.9954 34.6581 35 34.6252 35 33.5885C35 32.5518 34.9954 32.5188 34.8268 32.3502C34.66 32.1833 34.6185 32.177 33.6977 32.177H32.7419V25.4017V18.6264H33.1332C33.4546 18.6264 33.5555 18.5954 33.6977 18.4531C33.8664 18.2845 33.871 18.2516 33.871 17.2149C33.871 16.1782 33.8664 16.1452 33.6977 15.9766C33.5555 15.8343 33.4546 15.8034 33.1332 15.8034H32.7419V11.3571C32.7419 8.91163 32.7548 6.9108 32.7707 6.9108C32.7865 6.9108 33.0116 7.00608 33.2712 7.12253C33.8438 7.3795 34.0364 7.38698 34.2622 7.16099C34.434 6.98928 34.4355 6.97616 34.4355 5.65145C34.4355 4.48158 34.4201 4.29688 34.312 4.16879C34.1668 3.99672 25.0425 -0.00838534 24.8149 1.31899e-05C24.731 0.00311853 22.6142 0.902326 20.1109 1.99816ZM29.01 3.0004C31.276 3.9939 33.1698 4.82303 33.2182 4.84293C33.2774 4.86728 33.3065 5.04816 33.3065 5.39222V5.90517L29.138 4.07902C26.8454 3.07458 24.9129 2.25279 24.8437 2.25279C24.7466 2.25279 19.6848 4.43719 16.7767 5.73402L16.371 5.91498V5.39893V4.88295L20.5519 3.04614C22.8514 2.03592 24.7682 1.20594 24.8114 1.20178C24.8546 1.19762 26.744 2.00698 29.01 3.0004ZM28.2326 4.91837L31.5776 6.38417L31.5958 11.0938L31.6139 15.8034H24.8387H18.0635L18.0817 11.0964L18.0998 6.38953L21.4163 4.92797C23.2404 4.12411 24.7677 3.46324 24.8102 3.4595C24.8528 3.45569 26.3928 4.11219 28.2326 4.91837ZM18.8023 7.50752L18.629 7.68071V9.87499V12.0693L18.8023 12.2425L18.9754 12.4157H21.4516H23.9278L24.101 12.2425L24.2742 12.0693V9.87499V7.68071L24.101 7.50752L23.9278 7.33426H21.4516H18.9754L18.8023 7.50752ZM25.5765 7.50752L25.4032 7.68071V9.87499V12.0693L25.5765 12.2425L25.7496 12.4157H28.2258H30.702L30.8752 12.2425L31.0484 12.0693V9.87499V7.68071L30.8752 7.50752L30.702 7.33426H28.2258H25.7496L25.5765 7.50752ZM23.1452 9.87499V11.2865H21.4516H19.7581V9.87499V8.46347H21.4516H23.1452V9.87499ZM29.9194 9.87499V11.2865H28.2258H26.5323V9.87499V8.46347H28.2258H29.9194V9.87499ZM16.9355 11.5688V11.8511H9.59677H2.25806V11.5688V11.2865H9.59677H16.9355V11.5688ZM6.77419 14.3918V15.8034H5.64516H4.51613V14.3918V12.9803H5.64516H6.77419V14.3918ZM10.1613 14.3918V15.8034H9.03226H7.90323V14.3918V12.9803H9.03226H10.1613V14.3918ZM13.5484 14.3918V15.8034H12.4194H11.2903V14.3918V12.9803H12.4194H13.5484V14.3918ZM16.9355 14.3918V15.8034H15.8065H14.6774V14.3918V12.9803H15.8065H16.9355V14.3918ZM32.7419 17.2149V17.4972H17.5H2.25806V17.2149V16.9326H17.5H32.7419V17.2149ZM16.9355 25.4017V32.177H16.371H15.8065V28.2247C15.8065 24.707 15.8184 24.2725 15.9155 24.2725C15.9755 24.2725 16.1025 24.1945 16.1977 24.0992C16.3664 23.9306 16.371 23.8976 16.371 22.8609C16.371 21.8243 16.3664 21.7913 16.1977 21.6227L16.0246 21.4494H10.1613H4.29801L4.12485 21.6227C3.9562 21.7913 3.95161 21.8243 3.95161 22.8609C3.95161 23.8976 3.9562 23.9306 4.12485 24.0992C4.22011 24.1945 4.34713 24.2725 4.40711 24.2725C4.50413 24.2725 4.51613 24.707 4.51613 28.2247V32.177H3.95161H3.3871V25.4017V18.6264H10.1613H16.9355V25.4017ZM31.6129 25.4017V32.177H28.2258H24.8387V28.398V24.6189L24.6655 24.4457L24.4923 24.2725H21.7339H18.9754L18.8023 24.4457L18.629 24.6189V28.398V32.177H18.3468H18.0645V25.4017V18.6264H24.8387H31.6129V25.4017ZM15.2419 22.8609V23.1433H10.1613H5.08065V22.8609V22.5786H10.1613H15.2419V22.8609ZM14.6774 28.2247V32.177H10.1613H5.64516V28.2247V24.2725H10.1613H14.6774V28.2247ZM25.5765 24.4457L25.4032 24.6189V26.8132V29.0075L25.5765 29.1807L25.7496 29.3539H28.2258H30.702L30.8752 29.1807L31.0484 29.0075V26.8132V24.6189L30.8752 24.4457L30.702 24.2725H28.2258H25.7496L25.5765 24.4457ZM23.7097 28.7893V32.177H21.7339H19.7581V28.7893V25.4017H21.7339H23.7097V28.7893ZM29.9194 26.8132V28.2247H28.2258H26.5323V26.8132V25.4017H28.2258H29.9194V26.8132ZM22.1894 27.8334C22.0263 27.9965 22.0161 28.0524 22.0161 28.7893C22.0161 29.5263 22.0263 29.5822 22.1894 29.7453C22.2985 29.8545 22.4432 29.9185 22.5806 29.9185C22.7181 29.9185 22.8628 29.8545 22.9719 29.7453C23.135 29.5822 23.1452 29.5263 23.1452 28.7893C23.1452 28.0524 23.135 27.9965 22.9719 27.8334C22.8628 27.7241 22.7181 27.6601 22.5806 27.6601C22.4432 27.6601 22.2985 27.7241 22.1894 27.8334ZM33.871 33.5885V33.8708H17.5H1.12903V33.5885V33.3062H17.5H33.871V33.5885Z" fill="#0061E0"/>
        </svg>
        <h4>{project.numberofhouses}</h4>
        </div>

        <br />
        <h5>AMENITIES</h5>

        <ul>
        {project.amenities.map((amenity, index)=>(
          <li><p>{amenity}</p></li>
        ))}
        </ul>

        <br />
        <h5>LOCATION</h5>
        <div class="google-map">
        <iframe src={project.locationlink} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
          

        <br />
        <h5>GALLERY</h5>


        {project.images.slice(1).map((image, index)=>(
          <div className="image" key={index}>
          <img src={image} alt="" />
        </div>
         
        ))}
      </div>
    </div>
  )
}

export default SingleProject