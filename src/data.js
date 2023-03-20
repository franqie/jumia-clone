import { CiDumbbell } from 'react-icons/ci';
import { BsBrush, BsTablet, BsDisplay } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { IoGameControllerOutline, IoShirtOutline } from 'react-icons/io5';
import { MdChildCare } from 'react-icons/md';
import { AiOutlineCar } from 'react-icons/ai';
import { TbApple } from 'react-icons/tb';

const links = [
    {
        // icon: <CiApple />,
        icon: <TbApple/>,
        page: "supermarket",
        sublinks: [
            {
                label:[
                    "Food cupboard"                    
            ],
                categories: [
                    "grain & rice",
                    "pasta & noodles",
                    "breakfast foods",
                    "herbs, spices & seasoning",
                    "flour and meals",
                    "malt drinks",
                    "coffee",
                    "water",
                    "cooking oil",
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                ]
            },
            {
                label:[
                    "Baby products"                    
            ],
                categories: [
                    "disposable diapers",
                    "flask",
                    "feeding bottle",
                    "baby lotion",
                    "walker",
                    "malt drinks",
                    "coffee",
                    "water",
                    "cooking oil",
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                ]
            },
            {
                label:[
                    "Household cleaning"                    
            ],
                categories: [
                    "Laundry",
                    "Air freshners",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "water",
                    "cooking oil",
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                ]
            },
        ]
     },
    {
        icon: <BsBrush />,
        page: "Health & Beauty",
        sublinks: [
            {
                label: "Make up",
                categories: [
                    "grain & rice",
                    "Laundry",
                    "Air freshners",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "water",
                    "cooking oil",
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                ]
            }
        ]
     },
    {
        icon: <HiOutlineHome />,
        page: "Home & Office",
        sublinks: [
            {
                label: "Home & Kitchen",
                categories: [
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "water",
                    "cooking oil",
                    "juices",
                    "syrups, sugars & sweetners",
                    "soft drinks",
                    "grain & rice",
                    "Laundry",
                    "Air freshners",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "canned & packaged foods",
                    "candy & chocolates",
                ]
            }
        ]
     },
    {
        icon: <BsTablet />,
        page: "Phones & Tablets",
        sublinks: [
            {
                label: "Mobile phones",
                categories: [
                    "grain & rice",
                    "Laundry",
                    "Air freshners",
                    "Toilet paper & wipes",
                    "Dishwashing",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                    "cleaning tools",
                    "water",
                    "cooking oil",
                    "juices",
                    "Bathroom cleaners",
                    "flour & meals",
                    "soft drinks",
                ]
            }
        ]
     },
    {
        icon: <HiOutlineComputerDesktop />,
        page: "Computing",
        sublinks: [
            {
                label: "Computer accessories",
                categories: [
                    "grain & rice",
                    "Laundry",
                    "cooking oil",
                    "juices",
                    "soft drinks",
                    "Air freshners",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "water",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                ]
            }
        ]
     },
    {
        icon: <BsDisplay />,
        page: "Electronics",
        sublinks: [
            {
                label: "Plasma TVs",
                categories: [
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "grain & rice",
                    "water",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "Laundry",
                    "Air freshners",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "syrups, sugars & sweetners",
                    "cooking oil",
                    "juices",
                    "soft drinks",
                ]
            }
        ]
     },
    {
        icon: <IoShirtOutline />,
        page: "Fashion",
        sublinks: [
            {
                label: "Women's fashion",
                categories: [
                    "syrups, sugars & sweetners",
                    "grain & rice",
                    "Laundry",
                    "Air freshners",
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "water",
                    "cooking oil",
                    "candy & chocolates",
                ]
            }
        ]
     },
    {
        icon: <MdChildCare />,
        page: "Baby products",
        sublinks: [
            {
                label: "Feeding products",
                categories: [
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "water",
                    "cooking oil",
                    "grain & rice",
                    "Laundry",
                    "Air freshners",
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                ]
            }
        ]
     },
    {
        icon: <IoGameControllerOutline />,
        page: "Gaming",
        sublinks: [
            {
                label: "Play station",
                categories: [
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "grain & rice",
                    "Laundry",
                    "Air freshners",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "water",
                    "cooking oil",
                    "syrups, sugars & sweetners",
                ]
            }
        ]
     },
    {
        icon: <CiDumbbell />,
        page: "Sporting goods",
        sublinks: [
            {
                label: "cardio training",
                categories: [
                    "grain & rice",
                    "Laundry",
                    "Air freshners",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                    "water",
                    "cooking oil",
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                ]
            }
        ]
     },
    {
        icon: <AiOutlineCar />,
        page: "Automobile",
        sublinks: [
            {
                label: "car care",
                categories: [
                    "grain & rice",
                    "Laundry",
                    "Air freshners",
                    "water",
                    "cooking oil",
                    "juices",
                    "soft drinks",
                    "canned & packaged foods",
                    "candy & chocolates",
                    "syrups, sugars & sweetners",
                    "Toilet paper & wipes",
                    "Bathroom cleaners",
                    "flour & meals",
                    "Dishwashing",
                    "cleaning tools",
                ]
            }
        ]
     },
    // {
    //     icon: <HiOutlineDotsCircleHorizontal />,
    //     page: "Other Categories",
    //     sublinks: [
    //         {
    //             label: "Make up",
    //             categories: [
    //                 {product: "grain & rice"}
    //             ]
    //         }
    //     ]
    //  },
];

export default links;
