//Import Dependencies.
import React, { Component } from 'react';

class PrintResume extends Component {
    printResume(){
        const openResume = window.open('/app/assets/resume/Sunday_resume.pdf');
        openResume.print();
    }
    render(){
        return(
            <div className="print-resume-wrapper">
                <div onClick={this.printResume}>Print Resume</div>
            </div>
        )
    }
}

export default PrintResume;