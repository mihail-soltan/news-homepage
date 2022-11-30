import './sass/App.css';
import Logo from './assets/logo.svg';
import main from './assets/main-article.jpg';
import mobileMain from './assets/image-web-3-mobile.jpg';
import { navItems, sideArticles, moreArticles } from './data';

function App() {
  return (
    <div className="App">
      <nav className='desktop-nav'>
        <img src={Logo} className='logo' alt='logo' />
        <ul className='nav-container'>
          {navItems.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
        <div id="menuToggle">

          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            {navItems.map((item, index) =>
              <a href="#"><li key={index}>{item}</li></a>)}
          </ul>
        </div>
      </nav>
      <div className='main'>
        <div className='main-article'>
          <img className='main-article-image' alt='main-article' src={main} />
          <img className='main-article-image-mobile' alt='main-article-mobile' src={mobileMain} />
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
          {sideArticles.map((article, index) =>
            <div key={index} className='side-article'>
              <h3 className='side-article-title'>{article.title}</h3>
              <p className='side-article-clickbait'>{article.clickbait}</p>
              {article.bottomBorder && <hr className='side-article-divider' />}
            </div>)}
        </div>
      </div>
      <div className='secondary-articles'>
        {moreArticles.map((article, index) =>
          <div key={index} className='article-container'>
            <img className='secondary-articles-image' src={article.image} alt={article.title} />
            <div className='secondary-articles-content'>
              <h2>{article.id}</h2>
              <h3 className='secondary-articles-title'>{article.title}</h3>
              <p className='secondary-articles-clickbait'>{article.clickbait}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
