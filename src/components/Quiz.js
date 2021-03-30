

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

import { Link } from 'react-router-dom';

const Quiz = () => {
    return (
        <>
            <DividerStyled>
                {/* page title */}
                <Header title>
                    Quiz
                </Header>
                {/* page title */}

                {/* page subtitle 1 */}
                <Subheader title>
                    Quiz Subheader 1
                </Subheader>
                {/* page subtitle 1 */}

                {/* paragraph 1 */}
                <ParagraphStyled paragraph>
                    To enter code in the developer console, type at the prompt. Each press of the 
                    <i>&nbsp;&nbsp;Enter&nbsp;&nbsp;</i> key evalutes the current line. Therefore,
                    in order to enter code which spans multiple lines (such as a function), the use 
                    of <i>&nbsp;&nbsp;Shift + Enter&nbsp;&nbsp;</i> is necessary.
                </ParagraphStyled>
                {/* paragraph 1 */}
                
                {/* paragraph 2 */}
                <ParagraphStyled paragraph>
                    Since the developer console provides integrated input and output, the Hello 
                    World program requires only the string variable: either 'Hello World' or "Hello 
                    World." Single quotes and double quotes can both be used to delimit a string.
                    Alternatively, the programmer can make the output explicit by calling
                    the print function <i>&nbsp;&nbsp;console.log()&nbsp;&nbsp;</i>.
                </ParagraphStyled>
                {/* paragraph 2 */}
            </DividerStyled>                

            <DividerStyled parallel>
                <DividerStyled>
                    <ImageStyled src={ developerHelloWorld } alt='Hello World in Developer Console'/>
                </DividerStyled>

                <DividerStyled>
                    <ImageStyled src={ developerHelloWorldExplicit } alt='Hello World in Developer Console using console.log()'/>
                </DividerStyled>
            </DividerStyled>

            <DividerStyled>
                {/* paragraph 3 */}            
                <ParagraphStyled paragraph>
                    The image on the left shows the Hello World program using the integrated
                    output, whereas the image on the right shows the same program using the
                    <i>&nbsp;&nbsp;console.log()&nbsp;&nbsp;</i> print function.
                </ParagraphStyled>               
                {/* paragraph 3 */}

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
                    <Link to='/library'>&lArr; Library</Link>
                </Footer>

                <Footer>
                    <Link to='/'>Home &rArr;</Link>
                </Footer>
            </DividerStyled>
        </>
    )
}
export default Quiz;