import React from "react";
import "./styles.css";

export default function App() {
  return(
        <div id='body'>
            {/* <Header/> */}
            <Card 
                className='section1'
                img={require('./images/img1.png')}
                title='A Proven Way To Reduce Screen Time For Free' 
                description='Spiroc is the perfect tool for anyone
                 who wants to take back control of thier time and be more productive'
            />

            <Card2/>
            {/* <Card2 
                className='section bg-grey'
                img={require('./images/iPhone1.jpg')} 
                // title='Our Values'
                description='Select your most used apps and set up a daily limit'
            />
            <Card2 
                className='section bg-grey'
                img={require('./images/iPhone2.jpg')} 
                // title='Our Values'
                description='You can put some money at stake to increase your motivation'
            />
            <Card2 
                className='section bg-grey'
                img={require('./images/iPhone3.jpg')} 
                // title='Our Values'
                description='After the set limit is reached you can no longer use the app for the day unless you pay the amount.'
            /> */}

            {/* <Methodology_card 
                className='section'
                img='./images/bg.png' 
                title='Our Methodology' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            /> */}
            <Methodology_card/>
            <Purpose 
                className='section'
                img='./images/bg.png' 
                title='Who is this for' 
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.'
            />
            {/* <WaitlistForm/> */}
        </div>
    );
}

const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
            <img src={require('./images/spiroc_logo2.png')} alt="logo" className='header-logo'></img>
            </div>
            <div className="med-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <br/>
                <span className="red-text">1 Min Read</span>
                <br/>
                <br/>
                
                <span className="div-des">
                    {props.description}
                </span>
                <br/>
                <br/>
                <br/>
                <span>
                    <a href="/"><span className="waitlist-btn">JOIN THE WAITLIST FOR FREE</span></a>
                </span>
            </div>

            <div className="big-div">
                <span className="card-img">
                <img src={props.img} alt='' className="man_img" />
                </span>
            </div>
        </div>
    )
}

const Card2 = () =>{
    return(
        <div className='card2-div' >
          <div className="comp1" >
             <div>
                <img src={require('./images/iPhone1.jpg')} alt='' className="image-div" />
             </div>
             <br/> 

             <div>
                <span className="des-div">
                Select your most used apps and set up a daily limit
                </span>
             </div>
           </div>
         <div className="comp2"> 
          <div>
                <img src={require('./images/iPhone2.jpg')} alt=''  className="image-div"/>
            </div> 
             <br/>
            <div>
                <span className="des-div">
                You can put some money at stake to increase your motivation
                </span>
            </div>
         </div>

          <div className="comp1 comp3">
           <div>
                <img src={require('./images/iPhone3.jpg')} alt=''  className="image-div" />
            </div> 

            <div>
                <span className="des-div">
                After the set limit is reached you can no longer use the app for the day unless you pay the amount.
                </span>
            </div>
          </div>
          
        </div>
    )
}


const Methodology_card = () =>{
    return(
        <div className='method-card' >
            <div className="title-div">
                Our Methodology 
            </div>

            <div className="second-div">
              <div className="point1">
                <div>
                  <img src={require('./images/hand_icon.png')} alt=''  className="icon-img"/>
                </div>
                <div className="point-des">
                    Spiroc helps you understand how much time you spend on social media, gaming, or other activites that aren't <b>productive</b>.
                </div>
              </div>

              <div className="point2">
               <div>
                <img src={require('./images/hand_icon.png')} alt=''  className="icon-img"/>
                </div>
                <div className="point-des">
                    The Spiroc community will hold you accountable for your <b>progress</b> so you don't have to feel alone.
                </div>
               </div>

               <div className="point3">
                <div>
                 <img src={require('./images/hand_icon.png')} alt=''  className="icon-img"/>
                </div> 
                <div className="point-des">
                    You will recieve <b>weekly report</b> that show how much time you spend in each area of your life, so it's easy to see how much time is being spent in each area of your life, so its easy to see how much time is bieng spent on the things that matter most.
                </div>
               </div>
            </div>
        </div>
    )
}
// const Methodology_card = (props) =>{
//     return(
//         <div className={props.className} >
//             {/* <div className="small-div">
//                 <i className={props.className}></i>
//                 <img src={props.img} alt='' width={280} height={139} />
//             </div> */}

//             <div className="big-div">
//             <i className={props.className}></i>
                
//                 <span className='div-title'>
//                     {props.title}
//                 </span>
//                 <span>
//                 <img src={props.img} alt='' width={280} height={139} />
//                 </span>
                
                
//                 <span>
//                     {props.description}
//                 </span>
//             </div>
//         </div>
//     )
// }



const Purpose = (props) =>{
    return(
        <div className={props.className} >
            {/* <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt='' width={280} height={139} />
            </div> */}

            <div className="big-div">
            <i className={props.className}></i>
                
                <span className='div-title'>
                    {props.title}
                </span>
                <span>
                <img src={props.img} alt='' width={280} height={139} />
                </span>
                
                
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

