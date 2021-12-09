import React,{useState} from "react" ;
import "./index";


const emojiDictionary={

  "💩": "Pile of Poo",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😛": "Face with Tongue",
  "🤭": "Face with Hand Over Mouth",
  "🤫":  "Shushing Face",
  "🤥": "Lying Face",
  "🤕": "Face with Head-Bandage",
  "😎": "Smiling Face with Sunglasses",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😡": "Enraged Face",
  "😠": "Angry Face",
  "☠️": "Skull and Crossbones",
  "❤️" : "Red Heart",
  "💔" : "Broken Heart",
  "🌹" : "Rose",
  "🍔" : "Hamburger",
  "🥪" : "Sandwich",
  "🌯" : "Burrito",
  "🍨" : "Ice Cream",
  "🍫" : "Chocolate Bar",
  "🍬" : "Candy",
  "🍭 " :"Lollipop",
  "🥃" : "Tumbler Glass",
  "🍺 " :"Beer Mug",
  "🍜" : "noodles"
}

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
 const [meaning, setMeaning] = useState ("");

  function emojiInputHandler(event){ 
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outtt!!!!</h1>

      <input onChange={emojiInputHandler}/>

      <h2> {meaning}</h2>

      <h3>emoji  we know </h3>
      {
      emojisWeKnow.map(function (emoji){
        return (
        <span 
        onClick={() => emojiClickHandler(emoji)}style={{fontSize:"2rem",padding:"0.5rem",cursor:
        "pointer"}}
        key={emoji}
        >{emoji}
        </span>
        );

      })}

    </div>
  );
}







// import React from "react"
// import "./styles.css";


// var shoppingList =["milk","tea","egg","bread","flower"];

// export default function App(){
//     function getBg(index){
//       if (index % 2 === 0){
//       return "white " 
//     }   return"gray"
//   }

//   function listItemClickHandler(item){
//     console.log("clicked",item);
//   }
//   return (
//     <div className="App">
//       <h1>print my shopping List</h1>
//       <ul> 
//           {shoppingList.map(function (item,index) {
//             return (
//             <li
//              key={item}
//              onClick={() => listItemClickHandler(item)}
//              style={{ backgroundColor: getBg(index),padding:"1rem"
//             }}>{item} </li>
//             )

//           })}
//       </ul>
//     </div>
//   );
// }

