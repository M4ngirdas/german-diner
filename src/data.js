
import { nanoid } from "nanoid"

export const menuItems = [
    // main dishes
    {
        id: nanoid(),
        name: "Pork Schnitzel with salad",
        price: "15",
        category: "mainDishes",
        imgSrc: "/src/images/menu/schnitzel_with_salad.png",
        imgAlt: "Pork schnitzel with salad"
    },
    {
        id: nanoid(),
        name: "Potato dumplings (Kartoffelklöße)",
        price: "15",
        category: "mainDishes",
        imgSrc: "/src/images/menu/potato_dumplings.png",
        imgAlt: "Potato dumplings (Kartoffelklöße)"
    },
    {
        id: nanoid(),
        name: "Bavarian Pot Roast",
        price: "15",
        category: "mainDishes",
        imgSrc: "/src/images/menu/pot_roast.png",
        imgAlt: "Bavarian Pot Roast"
    },
    {
        id: nanoid(),
        name: "Bratwurst and sauerkraut",
        price: "15",
        category: "mainDishes",
        imgSrc: "/src/images/menu/bratwurst_and_sauerkraut.png",
        imgAlt: "Bratwurst and sauerkraut"
    },



    // soups
    {
        id: nanoid(),
        name: "Potato soup (Kartoffelsuppe)",
        price: "12",
        category: "soups",
        imgSrc: "/src/images/menu/potato_soup.png",
        imgAlt: "Potato soup (Kartoffelsuppe)"
    },
    {
        id: nanoid(),
        name: "Goulash soup (Gulaschsuppe)",
        price: "12",
        category: "soups",
        imgSrc: "/src/images/menu/goulash_soup.png",
        imgAlt: "Goulash soup (Gulaschsuppe)"
    },



    // bakery
    {
        id: nanoid(),
        name: "Pretzel",
        price: "3",
        category: "bakery",
        imgSrc: "/src/images/menu/pretzel.png",
        imgAlt: "Pretzel"
    },
    {
        id: nanoid(),
        name: "Cinamon rolls",
        price: "3",
        category: "bakery",
        imgSrc: "/src/images/menu/cinamon_rolls.png",
        imgAlt: "Cinamon rolls"
    },



    // dessert
    {
        id: nanoid(),
        name: "Bee sting cake (Bienenstich)",
        price: "12",
        category: "dessert",
        imgSrc: "/src/images/menu/bee_sting_cake.png",
        imgAlt: "Bee sting cake (Bienenstich)"
    },
    {
        id: nanoid(),
        name: "Red berry pudding (Rote Grütze)",
        price: "12",
        category: "dessert",
        imgSrc: "/src/images/menu/red_berry_pudding.png",
        imgAlt: "Red berry pudding (Rote Grütze)"
    },



    // drinks
    {
        id: nanoid(),
        name: "Red wine",
        price: "6",
        category: "drinks",
        imgSrc: "/src/images/menu/red_wine.png",
        imgAlt: "Red wine"
    },
    {
        id: nanoid(),
        name: "Dark beer (Dunkel)",
        price: "5",
        category: "drinks",
        imgSrc: "/src/images/menu/dark_beer.png",
        imgAlt: "Dark beer (Dunkel)"
    }
]