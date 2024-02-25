import "./App.css";
import Game from "./components/Game";

function App() {
  console.log("error");
  if (window.FBInstant) {
    window.FBInstant.initializeAsync().then(function () {
      console.log("fb found");
      // Start loading game assets here
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= 95) {
          clearInterval(interval);
          window.FBInstant.startGameAsync().then(() => {
            console.log("game has started");
          });
        }
        window.FBInstant.setLoadingProgress(progress);
        progress += 5;
      }, 100);
    });
  }

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
