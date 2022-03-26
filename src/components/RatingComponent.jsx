import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

export default function RatingComponent(){
    const [active, setActive] = useState(0);
    const [complete, setComplete] = useState(false);
    const [point, setPoint] = useState(0);

  

    const onComplete = () => {
        setComplete(true)
    }

    console.log(active);
    return (
        <>
        <Container>
            {complete ? 
            (
            <>
                <img className='mainImg' src="/img/Online_payment_Two_Color.png" />
                <div className='scoreBox'>You selected {active} out of 5</div>
                <p className='topText'>Thank you!</p>
                <p className='bottomText'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            
            </>
            )
            :
            (
            <>
                <img src="/img/Star.png" />
                <p className='question'>How did we do?</p>
                <p className='guide'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className='pointContainer'>
                    {active == 1 ? <div className='pointBox active' onClick={() => setActive(1)}>1</div>: <div className='pointBox' onClick={() => setActive(1)}>1</div>}
                    {active == 2 ? <div className='pointBox active' onClick={() => setActive(2)}>2</div>: <div className='pointBox' onClick={() => setActive(2)}>2</div>}
                    {active == 3 ? <div className='pointBox active' onClick={() => setActive(3)}>3</div>: <div className='pointBox' onClick={() => setActive(3)}>3</div>}
                    {active == 4 ? <div className='pointBox active' onClick={() => setActive(4)}>4</div>: <div className='pointBox' onClick={() => setActive(4)}>4</div>}
                    {active == 5 ? <div className='pointBox active' onClick={() => setActive(5)}>5</div>: <div className='pointBox' onClick={() => setActive(5)}>5</div>}
                </div>
                <SubmitBtn onClick={onComplete}>SUBMIT</SubmitBtn>
            </>
            )
            }
        </Container>
        </>
    );
}

const Container = styled.div`
position: relative;
display: flex;
width: 412px;
height: 416px;
flex-direction: column;

/* Black (Gradient) */

background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
border-radius: 30px;
margin: 195px auto;
padding: 32px 32px;

.mainImg {
    width: 162px;
    height: 108px;
    display: flex;
    margin: 13px auto 32px auto;
}

img {
    width: 48px;
    height: 48px;
    display: flex;
}

@media screen and (max-width: 700px){
    display: none;
}

.question {
position: relative;
height: 35px;
margin: 30px 0px 15px 0px;
/* Heading (Large) */

font-family: Overpass-Bold;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 35px;

/* Pure White */

color: #FFFFFF;
}

.guide {
position: relative;
height: 72px;
font-family: Overpass;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 24px;
/* or 160% */
margin: 0px 0px 24px 0px;


/* Light Grey */

color: #969FAD;
}

.pointContainer {
    width: 341px;
    height: 51px;
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
}

.pointBox {
    width: 51px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Overpass-Bold;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: center;
    letter-spacing: 0.2px;

    /* Medium Gray */
    background: #262E38;
    color: #7C8798;
    cursor: pointer;
    border-radius: 50%; 

    :hover {
        color: white;
        background: #FC7614;
    }
}
.active {
    color: white;
    background: #FC7614;
}

.scoreBox {
    width: 193px;
    height: 32px;
    display: flex;
    margin: 0px auto;
    justify-content: center;
    align-items: center;
    font-family: Overpass-Bold;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    /* identical to box height, or 160% */
    background : #262E38;
    text-align: center;
    border-radius: 22.5px;
    /* Orange */
    
    color: #FC7614;
}

.topText {

    font-family: Overpass-Bold;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;

    color: #FFFFFF;
    margin: 32px auto 7px auto;
}

.bottomText {
    font-family: Overpass;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    /* or 160% */
    
    text-align: center;
    
    /* Light Grey */
    
    color: #969FAD;
    margin: 0px auto;
}
`

const SubmitBtn = styled.button`
    width: 341px;
    height: 45px;
    display: flex;

    font-family: Overpass-Bold;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    /* identical to box height */

    background: #FC7614;
    letter-spacing: 2px;
    cursor: pointer;
    /* Pure White */
    margin-top: 32px;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    border-radius: 22.5px;
    border: 0px;
    
    :hover {
        color:  #FC7614;
        background: white;
    }
`