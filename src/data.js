import gaming from './assets/image-gaming-growth.jpg';
import laptops from './assets/image-top-laptops.jpg';
import retro from './assets/image-retro-pcs.jpg';

const sideArticles = [
    {
        title: "Hydrogen VS Electric Cars",
        clickbait: "Will hydrogen cars ever catch up to EVs?",
        bottomBorder: true,
    },
    {
        title: "The Downsides of AI Artistry",
        clickbait: "What are the possible adverse effects of on-demand AI image generation?",
        bottomBorder: true,
    },
    {
        title: "Is VC Funding Drying Up?",
        clickbait: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
        bottomBorder: false,
    }
]

const moreArticles = [
    {
        id: "01",
        title: "Reviving Retro PCs",
        clickbait: "What happens when old PCs are given modern upgrades?",
        image: retro,
    },
    {
        id: "02",
        title: "Top 10 Laptops of 2022",
        clickbait: "Our best picks for various needs and budgets.",
        image: laptops,
    },
    {
        id: "03",
        title: "The growth of gaming",
        clickbait: "How the pandemic has sparked fresh opportunities",
        image: gaming,
    },
]

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

export { sideArticles, moreArticles, navItems };