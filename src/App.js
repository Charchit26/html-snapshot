import logo from './logo.svg';
import './App.css';

async function downloadInnerHtml() {
  const {content, title} = await window.singlefile.getPageData({
    removeImports: true,
    removeScripts: true,
    removeAudioSrc: true,
    removeVideoSrc: true,
    removeHiddenElements: true,
    removeUnusedStyles: true,
    removeUnusedFonts: true,
    compressHTML: true,
    blockVideos: true,
    blockScripts: true,
  });

  const link = document.createElement('a');
  const mimeType = 'text/html';

  link.setAttribute('download', title);
  link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(content));
  link.click();
}
function App() {

  return (
    <div className="App" id="main">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={downloadInnerHtml}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
