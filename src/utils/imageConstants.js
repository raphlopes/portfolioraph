//File used to simplify importing new images

// Shop Category Choser
import PicWinterCover from "@/assets/imgcover/winter.jpg";
import PicSpringCover from "@/assets/imgcover/spring.jpg";
import PicSummerCover from "@/assets/imgcover/summer.jpg";
import PicAutumnCover from "@/assets/imgcover/autumn.jpg";

// Winter Imports
import Winter1 from "@/assets/img/winter/winter-1.jpg";
import Winter2 from "@/assets/img/winter/winter-2.jpg";
import Winter3 from "@/assets/img/winter/winter-3.jpg";
import Winter4 from "@/assets/img/winter/winter-4.jpg";

// Spring Imports
import Spring1 from "@/assets/img/spring/spring-1.jpg";
import Spring2 from "@/assets/img/spring/spring-2.jpg";
import Spring3 from "@/assets/img/spring/spring-3.jpg";
import Spring4 from "@/assets/img/spring/spring-4.jpg";

// Summer Imports
import Summer1 from "@/assets/img/summer/summer-1.jpg";
import Summer2 from "@/assets/img/summer/summer-2.jpg";
import Summer3 from "@/assets/img/summer/summer-3.jpg";
import Summer4 from "@/assets/img/summer/summer-4.jpg";

// Autumn Imports
import Autumn1 from "@/assets/img/autumn/autumn-1.jpg";
import Autumn2 from "@/assets/img/autumn/autumn-2.jpg";
import Autumn3 from "@/assets/img/autumn/autumn-3.jpg";
import Autumn4 from "@/assets/img/autumn/autumn-4.jpg";


const imgWinter = [
    {
        picture: Winter1,
        textOnHover: "Shinjuku under the rain",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Winter1,
            name: "Winter 1"
        }
    },
    {
        picture: Winter2,
        textOnHover: "Sapporo vending machine",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Winter2,
            name: "Winter 2"
        }
    },
    {
        picture: Winter3,
        textOnHover: "Snow monkeys in Nagano",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Winter3,
            name: "Winter 3"
        }
    },
    {
        picture: Winter4,
        textOnHover: "Togakushi shrine",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Winter4,
            name: "Winter 4"
        }
    }
];
const imgSpring = [
    {
        picture: Spring1,
        textOnHover: "Fuji-san in spring",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Spring1,
            name: "Spring 1"
        }
    },
    {
        picture: Spring2,
        textOnHover: "Meguro river at night",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Spring2,
            name: "Spring 2"
        }
    },
    {
        picture: Spring3,
        textOnHover: "Kyoto in spring",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Spring3,
            name: "Spring 3"
        }
    },
    {
        picture: Spring4,
        textOnHover: "Miyajima sunset",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Spring4,
            name: "Spring 4"
        }
    }
];
const imgSummer = [
    {
        picture: Summer1,
        textOnHover: "Shiinamachi Station",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Summer1,
            name: "Summer 1"
        }
    },
    {
        picture: Summer2,
        textOnHover: "Asakusa pond",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Summer2,
            name: "Summer 2"
        }
    },
    {
        picture: Summer3,
        textOnHover: "Ine Village",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Summer3,
            name: "Summer 3"
        }
    },
    {
        picture: Summer4,
        textOnHover: "Ishigaki beach",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Summer4,
            name: "Summer 4"
        }
    }
];
const imgAutumn = [
    {
        picture: Autumn1,
        textOnHover: "Fuji-san in autumn",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Autumn1,
            name: "Autumn 1"
        }
    },
    {
        picture: Autumn2,
        textOnHover: "Daruma",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Autumn2,
            name: "Autumn 2"
        }
    },
    {
        picture: Autumn3,
        textOnHover: "Kyoto river in autumn",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Autumn3,
            name: "Autumn 3"
        }
    },
    {
        picture: Autumn4,
        textOnHover: "Takaya Shrine",
        hover: false,
        link: "",
        category: 1,
        main: true,
        shoppingItem: {
            type: "postalCard",
            img: Autumn4,
            name: "Autumn 4"
        }
    }
];

const shopCover = [
    {
        picture : PicSpringCover,
        textOnHover : "Spring",
        hover : false,
        link : "",
        category : 1,
        main: true
    },
    {
        picture : PicSummerCover,
        textOnHover : "Summer",
        hover : false,
        link : "",
        category : 2,
        main: true
    },
    {
        picture : PicAutumnCover,
        textOnHover : "Autumn",
        hover : false,
        link : "",
        category : 3,
        main: true
    },
    {
        picture : PicWinterCover,
        textOnHover : "Winter",
        hover : false,
        link : "",
        category : 4,
        main: true
    },
];

// All Shop Pictures for Home
const homePictures = [
    // Merge the arrays imgWinter, imgSpring, imgSummer, imgAutumn without the shoppingItem field
    ...imgWinter.map(item => ({ ...item, shoppingItem: null, category: null  })),
    ...imgSpring.map(item => ({ ...item, shoppingItem: null, category: null })),
    ...imgSummer.map(item => ({ ...item, shoppingItem: null, category: null })),
    ...imgAutumn.map(item => ({ ...item, shoppingItem: null, category: null }))
];

const uniqueTypes = [...new Set([...imgWinter, ...imgSpring, ...imgSummer, ...imgAutumn]
    .map(item => item.shoppingItem.type))];

export {
    imgWinter,
    imgSpring,
    imgSummer,
    imgAutumn,
    shopCover,
    homePictures,
    uniqueTypes
};