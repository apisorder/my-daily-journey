

import React from 'react';
import DividerStyled from './DividerStyled';
import ParagraphStyled from './ParagraphStyled';
import Header from './Header';
import Subheader from './Subheader';
import Footer from './Footer';

import ImageStyled from './ImageStyled';

import developerHelloWorld from '../images/developerHelloWorld.png';
import developerHelloWorldExplicit from '../images/developerHelloWorldExplicit.png';
import nodeHelloWorld from '../images/nodeHelloWorld.png';
import nodeHelloWorldOutput from '../images/nodeHelloWorldOutput.png';

import variableDeclaration from '../images/variableDeclaration.png';
import variableDeclarationOutput from '../images/variableDeclarationOutput.png';

import { Link } from 'react-router-dom';

const NumericCalculations = () => {
    return (
        <>
            <DividerStyled>
                {/* page title */}
                <Header title>
                    Numeric Calculations
                </Header>
                {/* page title */}

                {/* paragraph 1 */}
                <ParagraphStyled paragraph>               
                    To perform a numeric calculation, two things are required: numbers, and 
                    arithmetic operators that act upon these numbers. To be able to save and 
                    recall results of these arithmetic operations, variables can be used.
                </ParagraphStyled>    

                {/* page subtitle 1 */}
                <Subheader title>
                    1. Variable Declaration
                </Subheader>
                {/* page subtitle 1 */}

                {/* paragraph 2 */}                                
                <ParagraphStyled>
                    In JavaScript, variables need to be declared before their use. However, since 
                    JavaScript is a dynamically-typed language, variables are declared without any 
                    type declaration. For example, <i>&nbsp;&nbsp;let num1;&nbsp;&nbsp;</i> 
                    declares a variable named num1 that can store any type of number. Actually,
                    numb1 can store any type of data, since JavaScript is dynamically typed. The
                    value stored in num1 is currently <i>&nbsp;&nbsp;undefined.&nbsp;&nbsp;</i>
                    This fact can be verified by printing out the value stored in
                    <i>&nbsp;&nbsp;num1.</i>
                </ParagraphStyled>
                {/* paragraph 2 */}                
            </DividerStyled>                

            <DividerStyled parallel>
                <DividerStyled>
                    <ImageStyled src={ variableDeclaration } alt='image of content in variable-declaration.js'/>
                </DividerStyled>

                <DividerStyled>
                    <ImageStyled src={ variableDeclarationOutput } alt='image of results of variable-declaration.js'/>
                </DividerStyled>
            </DividerStyled>

            <DividerStyled>
                {/* paragraph 3 */}            
                <ParagraphStyled paragraph>
👇🌈🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🌈👇
👆🌈🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🍰🌈👆                    

                    When the program spans multiple lines, comments can be added to make the logic
                    more clear.
                </ParagraphStyled>                    
                {/* paragraph 3 */}

                {/* page subtitle 2 */}
                <Subheader title>
                    2. Adding comments
                </Subheader>
                {/* page subtitle 2 */}

                {/* paragraph 4 */}            
                <ParagraphStyled paragraph>                                   
                    Notice how additional output has been generated when using<i>&nbsp;&nbsp;
                    console.log()&nbsp;&nbsp;</i> in the developer console. This is because
                    the output function does not return a value: the value returned from the
                    <i>&nbsp;&nbsp;console.log()&nbsp;&nbsp;</i> function is undefined. This
                    value is automatically displayed in the developer console.
                </ParagraphStyled>               
                {/* paragraph 4 */}


                {/* page subtitle 3 */}
                <Subheader title>
                    Method 2: Using Node.js Runtime
                </Subheader>
                {/* page subtitle 2 */}                

                {/* paragraph 3 */}
                <ParagraphStyled paragraph>
                    With the Node.js runtime, however, explicit invocation of the print funciton is
                    always required to print to the console. As has already been encountered, the
                    output function is called <i>console.log().&nbsp;&nbsp;</i> 
                    Therefore, the Hello World program requires the string to be passed in as
                    function argument: <i>&nbsp;&nbsp;console.log('Hello World')&nbsp;&nbsp;</i> 
                    or <i>&nbsp;&nbsp;console.log("Hello World").</i>
                </ParagraphStyled> 
                {/* paragraph 3 */}                              

                {/* paragraph 4 */}
                <ParagraphStyled paragraph>
                    Use a text editor of your choice, and enter either 
                    <i>&nbsp;&nbsp;console.log('Hello World');&nbsp;&nbsp;</i> or 
                    <i>&nbsp;&nbsp;console.log("Hello World");&nbsp;&nbsp;</i> and save the file.
                    Note that while JavaScript does not distinguish between single quotes and 
                    double quotes, we advise you to choose either and then be consistent with its
                    use in your code.
                </ParagraphStyled>
                {/* paragraph 4 */}

                {/* paragraph 5 */}                
                <ParagraphStyled paragraph>
                    Save the text file with the name <i>&nbsp;&nbsp;hello-world.js.&nbsp;&nbsp;</i>
                    Navigate to the terminal and type 
                    <i>&nbsp;&nbsp;node hello-world.js&nbsp;&nbsp;</i> to execute the file. Output 
                    will be displayed in the terminal.
                </ParagraphStyled>
                {/* paragraph 5 */}
            </DividerStyled>

            <DividerStyled parallel>
                <DividerStyled>
                    <ImageStyled src={ nodeHelloWorld } alt='image of Hello World program'/>
                </DividerStyled>

                <DividerStyled>
                    <ImageStyled src={ nodeHelloWorldOutput } alt='image of Hello World program output'/>
                </DividerStyled>
            </DividerStyled>

            <DividerStyled>
                {/* paragraph 6 */}
                <ParagraphStyled paragraph>
                    To encourage code reuse, all subsequent examples will be provided using the
                    Node.js runtime, where code is first written in a text file and then executed
                    in the terminal.
                </ParagraphStyled>
                {/* paragraph 6 */}
            </DividerStyled>

            <DividerStyled footer>
                <Footer>
                    <Link to='/hello-world'>&lArr; Hello World</Link>
                </Footer>

                <Footer>
                    <Link to='/branches'>Branches &rArr;</Link>
                </Footer>
            </DividerStyled>
        </>
    )
}
export default NumericCalculations;