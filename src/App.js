import {useState} from "react"; 
import angry from "./imgs/angry.png";
import happy from "./imgs/happy-face.png";
import love from "./imgs/in-love.png";
import sad from "./imgs/sad-face.png";
import thinking from "./imgs/thinking.png";

function Emotions(emotion){
  switch(emotion){
      case "angry":
          return angry;
      break
      case "happy":
        return happy;
      break
      case "love":
        return love;
      break
      case "sad":
        return sad;
      break
      case "thinking":
        return thinking;
      break
      default:
        return happy;
      break;
  }
}

function MainContent(){
  const [emotion, setEmotion] = useState("Happy");
  console.log(emotion);
  return(
        <>
        <header>
          <h1>How is your mood today?</h1>
          <p>This project aims to improve and put into practice development techniques in React.</p>
        </header>
        <hr/>
        <section>
            <h2><b>Dynamic content with useState</b></h2>
            <p><b>How are you feeling today?</b></p>  
            <p><img src={Emotions(emotion)} alt="Angry" style={{ height: 100, marginTop: 10 }}/></p>
            <button onClick={() => setEmotion("angry")} >
                <img src={angry} alt="Angry" style={{ height: 50, marginTop: 10 }}/>
            </button>
            <button onClick={() => setEmotion("happy")}>
                <img src={happy} alt="" style={{ height: 50, marginTop: 10 }}/>
            </button>
            <button onClick={() => setEmotion("love")}>
                <img src={love} alt="love" style={{ height: 50, marginTop: 10 }}/>
            </button>
            <button onClick={() => setEmotion("sad")}>
                <img src={sad} alt="Sad" style={{ height: 50, marginTop: 10 }}/>
            </button>
            <button onClick={() => setEmotion("thinking")}>
                <img src={thinking} alt="Thinking" style={{ height: 50, marginTop: 10 }}/>
            </button>
        </section>
        <footer>
          Leonardo Moura - <a href="https://github.com/mouraleonardo/">Github Profile</a>
        </footer>
        </>
      )
}
function App() {
  return (
    <>
      <MainContent />
    </>
  );
}

export default App;
