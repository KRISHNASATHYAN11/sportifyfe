import React from 'react'
import {
  faHeart,
  faHome,
  faHomeUser,
  faPlus,
  faSearch,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileSideBar = () => {
  return (
    <>

       <div class="md:hidden fixed bottom-0 left-0 w-full bg-white border-t py-2">
          <div class="flex justify-around text-2xl">
            <span className="cursor-pointer"><FontAwesomeIcon icon={faHome}/></span>
            <span className="cursor-pointer"><FontAwesomeIcon icon={faSearch}/></span>
            <span className="cursor-pointer"><FontAwesomeIcon icon={faPlus}/></span>
             <span className="cursor-pointer"><FontAwesomeIcon icon={faUserGroup}/></span>
                          <span className="cursor-pointer"><FontAwesomeIcon icon={faHeart}/></span>

            <span className="cursor-pointer"><FontAwesomeIcon icon={faUser}/></span>
           
          </div>
        </div>






    </>
  )
}

export default MobileSideBar