import '../../../../styles/Education/template4.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function EducationTemplate4() {
    let [indexOfQuestion, setIndexOfQuestion] = useState(0);


    const quizz = [
        {
            "question": "Google (www.google.com) is a : ",
            "reponseA": "Number in math",
            "reponseB": "Search engine",
            "reponseC": "Directory of images",
            "reponseD": "Chat service on web",
            "reponse": ["reponseB"],
            "temps": 11,
        },
        {
            "question": "<code>console.log(0.1 + 0.2 == 0.3);</code>",
            "reponseA": "true",
            "reponseB": "false",
            "reponse": ["reponseB"],
            "temps": 12,
        }
        ,
        {
            "question": " PHP Stands for",
            "reponseA": "Php Hypertext Processor",
            "reponseB": "Php Hypertext Preprocessor",
            "reponseC": "Php Hypermarkup Preprocessor",
            "reponseD": "Php Hypermarkup Processor",
            "reponse": ["reponseB"],
            "temps": 13,
        }
    ]
    let [time, setTime] = useState(10);

    const commencerQuizz = () => {
        document.getElementById('div-quizz-container').style.display = "block";
        document.getElementById('div-quizz-commencer').style.display = "none";

        setTime(setInterval(() => {
            if (time > 0) {
                time--
            }
            else {
                next()
            }
        },1000) 
    )
    }
    // 
    const next = () => {
        if (quizz.length >= indexOfQuestion + 1) {
            setIndexOfQuestion(indexOfQuestion++);
        }
        else
            setIndexOfQuestion(0);
        setTime(quizz[indexOfQuestion - 1].temps)
    }

    return (
        <div className="div-quizz-body d-flex justify-content-center align-items-center">
            <div id="div-quizz-commencer" onClick={commencerQuizz}>
                <button className='btn btn-light'>Commencer le quizz</button>
            </div>
            <div className="div-quizz-container" id="div-quizz-container">
                <div className="d-flex justify-content-between align-items-center"
                    style={{ padding: "15px 0", borderBottom: "2px solid #8c34e7" }}>
                    <div> {indexOfQuestion + 1} of {quizz.length} questions </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                            <path
                                d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                        </svg>
                        <div id="remaining-time"> {time}s</div>
                    </div>
                </div>
                <p id="quiz-question">Google (www.google.com) is a : </p>
                <label className="form-control">
                    <input type="radio" name="quizzQ1" />
                    {quizz[indexOfQuestion].reponseA}
                </label>

                <label className="form-control">
                    <input type="radio" name="quizzQ1" />
                    {quizz[indexOfQuestion].reponseB}
                </label>
                {quizz[indexOfQuestion].reponseC != null &&
                    <label className="form-control">
                        <input type="radio" name="quizzQ1" />
                        {quizz[indexOfQuestion].reponseC}
                    </label>
                }

                {quizz[indexOfQuestion].reponseD != null &&
                    <label className="form-control">
                        <input type="radio" name="quizzQ1" />
                        {quizz[indexOfQuestion].reponseD}
                    </label>
                }
                <div style={{ textAlign: "right" }}>
                    <button className="btn btn-light"
                        onClick={() => {
                            next()
                        }}
                    >Next</button>

                </div>

            </div>
        </div>
    );
}

export default EducationTemplate4;