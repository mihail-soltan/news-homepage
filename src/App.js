import './App.css';
import Logo from './assets/logo.svg';
import gaming from './assets/image-gaming-growth.jpg';
import laptops from './assets/image-top-laptops.jpg';
import retro from './assets/image-retro-pcs.jpg';

function App() {
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

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

  return (
    <div className="App">
      <nav className='desktop-nav'>
        <img src={Logo} className='logo' alt='logo' />
        <ul className='nav-container'>
          {navItems.map((i, index) =>
            <li key={index}>{i}</li>
          )}
        </ul>
      </nav>
      <div className='main'>
        <div className='main-article'>
          <img className='main-article-image' alt='main-article' src={require("./assets/main-article.jpg")} />
          <img className='main-article-image-mobile' alt='main-article-mobile' src={require("./assets/image-web-3-mobile.jpg")} />
          <div className='main-article-content'>
            <h2 className='main-article-title'>The Bright Future of Web 3.0?</h2>
            <div className='main-article-preview'>
              <p>We dive into the next evolution of the web that
                claims to put the power of the platforms back
                into the hands of the people. But is it really
                fulfilling its promise?</p>
              <button className='read-more-btn'>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='main-articles-list'>
          <h2 className='news-header'>NEW</h2>
          {sideArticles.map((art, index) =>
            <div key={index} className='side-article'>
              <h3 className='side-article-title'>{art.title}</h3>
              <p className='side-article-clickbait'>{art.clickbait}</p>
              {art.bottomBorder && <hr className='side-article-divider' />}
            </div>)}
        </div>
      </div>
      <div className='secondary-articles'>
        {moreArticles.map((art, index) =>
          <div key={index} className='article-container'>
            <img className='secondary-articles-image' src={art.image} alt={art.title} />
            <div className='secondary-articles-content'>
              <h2>{art.id}</h2>
              <h3 className='secondary-articles-title'>{art.title}</h3>
              <p className='secondary-articles-clickbait'>{art.clickbait}</p>
            </div>
          </div>
        )}

        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
