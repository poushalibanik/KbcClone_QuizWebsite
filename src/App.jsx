import "./app.css";
import {  useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [ username, setUsername ] = useState(null);
    const [ questionNumber, setQuestionNumber ] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned]= useState("$ 0");
   


    const data = [
      {
        id: 1,
        question: "Rolex is a company that specializes in what type of product?",
        answers: [
          {
            text: "Phone",
            correct: false,
          },
          {
            text: "Watches",
            correct: true,
          },
          {
            text: "Food",
            correct: false,
          },
          {
            text: "Cosmetic",
            correct: false,
          },
        ],
      },

      {
        id: 2,
        question: "When did the website `Facebook` launch?",
        answers: [
          {
            text: "2004",
            correct: true,
          },
          {
            text: "2005",
            correct: false,
          },
          {
            text: "2006",
            correct: false,
          },
          {
            text: "2007",
            correct: false,
          },
        ],
      },

      {
        id: 3,
        question: "Who played the character of harry potter in movie?",
        answers: [
          {
            text: "Johnny Deep",
            correct: false,
          },
          {
            text: "Leonardo Di Caprio",
            correct: false,
          },
          {
            text: "Denzel Washington",
            correct: false,
          },
          {
            text: "Daniel Red Cliff",
            correct: true,
          },
        ],
      },

    {
      id: 4,
      question:"What is the scientific name of a butterfly?",
      answers: [
        {
          text: "Apis",
          correct: false,
        },
        {
          text: "Coleoptera",
          correct: false,
        },
        {
          text: "Rhopalocera",
          correct: false,
        },
        {
          text: "Formicidae",
          correct: true,
        },
      ],
    },

    {
      id: 5,
      question:"How hot is the surface of the sun?",
      answers: [
        {
          text: "1,233 K",
          correct: true,
        },
        {
          text: "5,778 K",
          correct: false,
        },
        {
          text: "12,130 K",
          correct: false,
        },
        {
          text: "101,300 K",
          correct: false,
        },
      ],
    },

    {
    id: 6,
    question:"What is the capital of Spain?",
    answers: [
      {
        text: "Berlin",
        correct: false,
      },
      {
        text: "Buenos Aires",
        correct: true,
      },
      {
        text: "Madrid",
        correct: false,
      },
      {
        text: "San Juan",
        correct: false,
      },
    ],
  },

  {
    id: 7,
    question:"When was Mahatma Gandhi born?",
    answers: [
      {
        text: "October 2, 1869",
        correct: true,
      },
      {
        text: "October 2, 1872",
        correct: false,
      },
      {
        text: "October 2, 1918",
        correct: false,
      },
      {
        text: "October 2, 1929",
        correct: false,
      },
    ],
  },

  {
    id: 8,
    question:"The central banking functions in India are performed by the",
    answers: [
      {
        text: "Central Bank of India",
        correct: false,
      },
      {
        text: "Reserve Bank of India",
        correct: true,
      },
      {
        text: "State Bank of India",
        correct: false,
      },
      {
        text: "Punjab National Bank",
        correct: false,
      },
    ],
  },
  
  {
    id: 9,
    question:"The metallurgical process in which a metal is obtained in a fused state is called",
    answers: [
      {
        text: "smelting",
        correct: true,
      },
      {
        text: "	roasting",
        correct: false,
      },
      {
        text: "calcinations",
        correct: false,
      },
      {
        text: "froth floatation",
        correct: false,
      },
    ],
  },

  {
    id: 10,
    question:"B. C. Roy Award is given in the field of",
    answers: [
      {
        text: "Music",
        correct: false,
      },
      {
        text: "Journalism",
        correct: false,
      },
      {
        text: "Medicine",
        correct: true,
      },
      {
        text: "Environment",
        correct: false,
      },
    ],
  },

  {
    id: 11,
    question:"Which was the 1st non Test playing country to beat India in an international match?",
    answers: [
      {
        text: "Tubby",
        correct: false,
      },
      {
        text: "	Stodge",
        correct: false,
      },
      {
        text: "Helium Bat",
        correct: false,
      },
      {
        text: "Stumpy",
        correct: true,
      },
    ],
  },

  {
    id: 12,
    question:"Who developed Yahoo?",
    answers: [
      {
        text: "Dennis Ritchie & Ken Thompson",
        correct: false,
      },
      {
        text: "David Filo & Jerry Yang",
        correct: true,
      },
      {
        text: "Vint Cerf & Robert Kahn",
        correct: false,
      },
      {
        text: "Steve Case & Jeff Bezos",
        correct: false,
      },
    ],
  },

  {
    id: 13,
    question:"Potassium Permanganate is used for purifying drinking water, because",
    answers: [
      {
        text: "it is a sterilising agent",
        correct: false,
      },
      {
        text: "it dissolves the impurities of water",
        correct: false,
      },
      {
        text: "it is a reducing agent",
        correct: false,
      },
      {
        text: "it is an oxidising agent",
        correct: true,
      },
    ],
  },
  
  {
    id: 14,
    question:"Which of the following books has been written by Vikram Seth?",
    answers: [
      {
        text: "My God Died Young",
        correct: false,
      },
      {
        text: "Islamic Bomb",
        correct: false,
      },
      {
        text: "Look Back in Anger",
        correct: false,
      },
      {
        text: "A Suitable Boy",
        correct: true,
      },
    ],
  },
  
  {
    id: 15,
    question:"The chairmanship/presidency of the UN Security Council rotates among the Council Members",
    answers: [
      {
        text: "every 6 months",
        correct: false,
      },
      {
        text: "every 3 months",
        correct: false,
      },
      {
        text: "every year",
        correct: false,
      },
      {
        text: "every month",
        correct: true,
      },
    ],
  },

  ];
   
 const moneyPyramid = useMemo(()=>
      [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ].reverse(),
    [ ] 
    );

        useEffect(()=>{
      questionNumber >1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount);
    },[moneyPyramid,questionNumber]);

    return (
    <div className="app">
    {username ? ( 
      <>
      <div className="main">
      {stop ? (
        <h1 className="endText">You earned: {earned}</h1>
         ) : (
        <>
      <div className="top">
        <div className="timer">
          <Timer setStop={setStop} questionNumber={questionNumber}/>
        </div>
        </div>
      <div className="bottom">
          <Trivia
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
        </>
      )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
        {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListAmount">{m.amount}</span>
          </li>
        ))} 
        </ul>
      </div>
      </>
    ) : ( 
      <Start setUsername={setUsername}/>
      )}
    </div>
  
  );
}

export default App;
