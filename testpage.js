import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import Navtag from './components/navtag';

const TestHome = () => {
    const [Heading, setHeading] = useState('Instructions');
    const [examName, setExamName] = useState('<exam name>');
    const [userName, setUserName] = useState('<user name>');
    const [instructions, setinstructions] = useState('Please dont copy in the examination');

    useEffect(() => {
        // Fetch data from the backend
        fetch('/api/exam-and-user')
            .then(response => response.json())
            .then(data => {
                setExamName(data.examName);
                setUserName(data.userName);
            })
            .catch(error => console.error(error));
    }, []);


    return (
        <Fragment>
            <div className='nav '>
                <div ><img src='https://bodhasoft.com/static/img/logo.webp' alt='bodhasoft' className='logo mlogo ' /></div>
                <h2 >{examName}</h2>
            </div>
            
            <div className='rows'>

                <div className='box col-6'>
                    <div className='heading'>Hello {userName}</div>
                    <div className='content'>Welcome to {examName} Test</div>
                    <table>
                        <tr>
                            <td>No.of.questions</td>
                            <td>Duration</td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td>60 min</td>
                        </tr>
                    </table>
                </div>
                <div className='box col-6'>
                    <h2>{Heading}</h2>
                    <div className='instructions'>{instructions}</div>
                    <button>Continue</button>
                </div>
            </div>

        </Fragment>
    )
}

export default TestHome