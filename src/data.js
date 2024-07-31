// import hero slider images
import HeroSlideImage1 from "./assets/img/dogs/dog-slide-1.png";
import HeroSlideImage2 from "./assets/img/dogs/dog-slide-2.png";
import HeroSlideImage3 from "./assets/img/dogs/dog-slide-3.png";
// import dog category images
import DogCateg1 from "./assets/img/dogs/dog-categ-1.png";
import DogCateg2 from "./assets/img/dogs/dog-categ-2.png";
import DogCateg3 from "./assets/img/dogs/dog-categ-3.png";
import DogCateg4 from "./assets/img/dogs/dog-categ-4.png";
// import social icons
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";

export const navigation = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "prices",
    href: "#",
  },
  {
    name: "contact",
    href: "#",
  },
  {
    name: "get an appointment",
    href: "#",
  },
];

export const heroSlider = [
  {
    id: 1,
    title: "We take care of your pet.",
    image: <HeroSlideImage1 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    // buttonText: 'Get an appointment',
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit.",
    image: <HeroSlideImage2 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    // buttonText: 'Get an appointment',
  },
  {
    id: 3,
    title: "Nunc odio in et, lectus sit.",
    image: <HeroSlideImage3 />,
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    // buttonText: 'Get an appointment',
  },
];

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: "Tuffy",
    dogCategory: "Breed-Specific Grooming",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
        lorem100
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },

  {
    id: 2,
    image: <DogCateg2 />,
    name: "Bruno",
    dogCategory: "Cat Grooming",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },

  {
    id: 3,
    image: <DogCateg3 />,
    name: "Jimmy",
    dogCategory: "Dog Grooming",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },
  
  {
    id: 4,
    image: <DogCateg4 />,
    name: "Happy",
    dogCategory: "Breed-Specific Grooming",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },

  {
    id: 5,
    image: <DogCateg2 />,
    name: "Suzi",
    dogCategory: "General Pet Care",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },

  {
    id: 6,
    image: <DogCateg3 />,
    name: "Jack",
    dogCategory: "Grooming Tips and Tricks",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },

  {
    id: 7,
    image: <DogCateg3 />,
    name: "small",
    dogCategory: "Health & Wellness",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },

  {
    id: 8,
    image: <DogCateg4 />,
    name: "Alex",
    dogCategory: "Pet Health",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },

  {
    id: 9,
    image: <DogCateg1 />,
    name: "Jasss",
    dogCategory: "Pet Grooming",
    para: <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
        nemo iure itaque illo nulla inventore laudantium illum sit vero nam
        fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
        explicabo deleniti vel? Soluta.
        lore
      </p>

    // content: [
    //   {
    //     para: (
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil
    //         nemo iure itaque illo nulla inventore laudantium illum sit vero nam
    //         fugit molestiae sed earum atque fuga, commodi mollitia cupiditate
    //         explicabo deleniti vel? Soluta.
    //       </p>
    //     ),
    //   },
    // ],
  },









// This can be use further but keep comment for now only
  // {
  //   id: 2,
  //   name: "medium",
  //   image: <DogCateg2 />,
  //   dogCategory: "Cat Grooming",
  //   services: [
  //     {
  //       name: "smart",
  //       price: 80,
  //       list: ["wash", "ears cleaning", "nail cut", "perfumed"],
  //     },
  //     {
  //       name: "premium",
  //       price: 100,
  //       list: [
  //         "all smart services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //       ],
  //     },
  //     {
  //       name: "royal",
  //       price: 120,
  //       list: [
  //         "all premium services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //         "service 5",
  //         "service 6",
  //       ],
  //     },
  //   ],
  // },

  // {
  //   id: 3,
  //   name: "big",
  //   image: <DogCateg3 />,
  //   dogCategory: "Dog Grooming",
  //   services: [
  //     {
  //       name: "smart",
  //       price: 140,
  //       list: ["wash", "ears cleaning", "nail cut", "perfumed"],
  //     },
  //     {
  //       name: "premium",
  //       price: 160,
  //       list: [
  //         "all smart services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //       ],
  //     },
  //     {
  //       name: "royal",
  //       price: 180,
  //       list: [
  //         "all premium services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //         "service 5",
  //         "service 6",
  //       ],
  //     },
  //   ],
  // },

  // Category 4
  // {
  //   id: 4,
  //   name: "super",
  //   image: <DogCateg4 />,
  //   dogCategory: "General Pet Care",
  //   services: [
  //     {
  //       name: "smart",
  //       price: 200,
  //       list: ["wash", "ears cleaning", "nail cut", "perfumed"],
  //     },
  //     {
  //       name: "premium",
  //       price: 210,
  //       list: [
  //         "all smart services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //       ],
  //     },
  //     {
  //       name: "royal",
  //       price: 220,
  //       list: [
  //         "all premium services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //         "service 5",
  //         "service 6",
  //       ],
  //     },
  //   ],
  // },

  // Category 5
  // {
  //   id: 5,
  //   name: "super",
  //   image: <DogCateg4 />,
  //   dogCategory: "Grooming Tips and Tricks",
  //   services: [
  //     {
  //       name: "smart",
  //       price: 200,
  //       list: ["wash", "ears cleaning", "nail cut", "perfumed"],
  //     },
  //     {
  //       name: "premium",
  //       price: 210,
  //       list: [
  //         "all smart services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //       ],
  //     },
  //     {
  //       name: "royal",
  //       price: 220,
  //       list: [
  //         "all premium services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //         "service 5",
  //         "service 6",
  //       ],
  //     },
  //   ],
  // },

  // Category 6
  // {
  //   id: 6,
  //   name: "super",
  //   image: <DogCateg4 />,
  //   dogCategory: "Health & Wellness",
  //   services: [
  //     {
  //       name: "smart",
  //       price: 200,
  //       list: ["wash", "ears cleaning", "nail cut", "perfumed"],
  //     },
  //     {
  //       name: "premium",
  //       price: 210,
  //       list: [
  //         "all smart services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //       ],
  //     },
  //     {
  //       name: "royal",
  //       price: 220,
  //       list: [
  //         "all premium services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //         "service 5",
  //         "service 6",
  //       ],
  //     },
  //   ],
  // },

  // Category 7
  // {
  //   id: 7,
  //   name: "super",
  //   image: <DogCateg4 />,
  //   dogCategory: "Pet Care",
  //   services: [
  //     {
  //       name: "smart",
  //       price: 200,
  //       list: ["wash", "ears cleaning", "nail cut", "perfumed"],
  //     },
  //     {
  //       name: "premium",
  //       price: 210,
  //       list: [
  //         "all smart services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //       ],
  //     },
  //     {
  //       name: "royal",
  //       price: 220,
  //       list: [
  //         "all premium services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //         "service 5",
  //         "service 6",
  //       ],
  //     },
  //   ],
  // },

  // category 8
  // {
  //   id: 8,
  //   name: "super",
  //   image: <DogCateg4 />,
  //   dogCategory: "Pet Grooming",
  //   services: [
  //     {
  //       name: "smart",
  //       price: 200,
  //       list: ["wash", "ears cleaning", "nail cut", "perfumed"],
  //     },
  //     {
  //       name: "premium",
  //       price: 210,
  //       list: [
  //         "all smart services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //       ],
  //     },
  //     {
  //       name: "royal",
  //       price: 220,
  //       list: [
  //         "all premium services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //         "service 5",
  //         "service 6",
  //       ],
  //     },
  //   ],
  // },

  // Category 9
  // {
  //   id: 8,
  //   name: "super",
  //   image: <DogCateg4 />,
  //   dogCategory: "Pet Health",
  //   services: [
  //     {
  //       name: "smart",
  //       price: 200,
  //       list: ["wash", "ears cleaning", "nail cut", "perfumed"],
  //     },
  //     {
  //       name: "premium",
  //       price: 210,
  //       list: [
  //         "all smart services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //       ],
  //     },
  //     {
  //       name: "royal",
  //       price: 220,
  //       list: [
  //         "all premium services",
  //         "service 1",
  //         "service 2",
  //         "service 3",
  //         "service 4",
  //         "service 5",
  //         "service 6",
  //       ],
  //     },
  //   ],
  // },

  // Category 10
];

export const social = [
  {
    icon: <AiFillYoutube />,
    href: "#",
  },
  {
    icon: <AiFillInstagram />,
    href: "#",
  },
  {
    icon: <AiFillGithub />,
    href: "#",
  },
];
