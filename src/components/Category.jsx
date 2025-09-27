import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
 const Categories = [
    {
        id:1,
        name:"All",
        image:<TiThSmall className="w-[60px] h-[60px]
        text-green-600"/>,
    },
     {
        id:2,
        name:"breakfast",
        image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px]
        text-green-600"/>,
    },
     {
        id:3,
        name:"soups",
        image:<TbSoup className="w-[60px] h-[60px]
        text-green-600"/>,
    },
     {
        id:4,
        name:"pasta",
        image:<CiBowlNoodles className="w-[60px] h-[60px]
        text-green-600"/>,
    },
     {
        id:5,
        name:"main_course",
        image:<IoRestaurantOutline className="w-[60px] h-[60px]
        text-green-600"/>,
    },
     {
        id:6,
        name:"pizza",
        image:<GiFullPizza className="w-[60px] h-[60px]
        text-green-600"/>,
    },
     {
        id:7,
        name:"burger",
        image:<GiHamburger className="w-[60px] h-[60px]
        text-green-600"/>,
    },
]

export default Categories;