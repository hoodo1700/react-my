import React from "react"
// function About(){
//     return(
//   <div>
 
//         <div class="card" style={{width:"18rem"}}>
        
//           <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             b5
//           </div>
//         </div>

//     </div>
 
//     )
// }

// export default About
// import React from 'react';

// const About = () => {
   
//     const cardData = [
//         { 
//             title: "Card 1 Title", 
//             subtitle: "Card 1 Subtitle", 
//             text: "This is the content for card 1." 
//         },
//         { 
//             title: "Card 2 Title", 
//             subtitle: "Card 2 Subtitle", 
//             text: "This is the content for card 2." 
//         },
//         { 
//             title: "Card 3 Title", 
//             subtitle: "Card 3 Subtitle", 
//             text: "This is the content for card 3." 
//         },
//     ];

//     return (
//         <div>
         
//             {cardData.map((card, index) => (
//                 <div className="card" style={{ width: "18rem", margin: "10px" }} key={index}>
//                     <div className="card-body">
//                         <h5 className="card-title">{card.title}</h5>
//                         <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
//                         <p className="card-text">{card.text}</p>
//                         <button className="btn btn-primary">Click Me</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default About;
const About = () => {
    const cardData = [
        {
            title: "Html ",
            subtitle: "hello",
            text: "This is the content for card 1.",
            image: "./logo.jfif",
        },
        {
            title: "Python",
            subtitle: "Hello World",
            text: "This is the content for card 2.",
            image: "./logo.jfif",
        },
        {
            title: "Javascript",
            subtitle: "Hello Hoodo",
            text: "This is the content for card 3.",
            image: "./logo.jfif",
            
        },

    ];

    return (
        <div className="container mt-5">
            
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body">
                            <img
                                src={card.image}
                                className="card-img-top"
                                alt={card.title}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                                <h5 className="card-title text-dark">{card.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{card.subtitle}</h6>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-primary"> <i class="fa-solid fa-hand-pointer"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;



 