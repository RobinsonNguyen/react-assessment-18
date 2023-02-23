const Instructions = () => {
  return (
    <>
      <h1 id="title">React assessment</h1>
      <p id="insructionsCopy">
        In Instructions.js, write your answers to the following questions.
      </p>
      <div className="question">
        <p>
          When working in react, the life cycle method componentDidMount is:
        </p>
        <ul>
          <li>A. Deprecated</li>
          <li>B. Associated with class based components</li>
          <li>C. Associated with function based components</li>
        </ul>
        {/* write your answer here =>     B     */}
      </div>
      <div className="question">
        <p>
          If I were wanting to make an API call when the application loads, what
          hook might I use in a function based component?
        </p>
        <ul>
          <li>A. useEffect</li>
          <li>B. componentDidMount</li>
          <li>C. componentWillMount</li>
          <li>C. useState</li>
        </ul>
        {/* write your answer here =>     A     */}
      </div>
      <div className="question">
        <p>
          What is the design pattern for using local state within a function
          component to handle input from a user?
        </p>
        <ul>
          <li>A. useRef</li>
          <li>B. Contolled component</li>
          <li>C. Data validation</li>
          <li>C. Input validation</li>
        </ul>
        {/* write your answer here =>    B      */}
      </div>
      <div className="question">
        <p>React has multi-directional data flow.</p>
        <ul>
          <li>A. True</li>
          <li>B. False</li>
        </ul>
        {/* write your answer here =>    B      */}
      </div>
      <div className="question">
        <p>React was created and is upkept by</p>
        <ul>
          <li>A. Google</li>
          <li>B. Facebook</li>
          <li>C. Ecmascript team</li>
          <li>C. Microsoft</li>
        </ul>
        {/* write your answer here =>     B     */}
      </div>
      <div className="question">
        <p>Which of the concepts below is not specific to ReactJS</p>
        <ul>
          <li>A. Class</li>
          <li>B. Props</li>
          <li>C. VirtualDOM</li>
        </ul>
        {/* write your answer here =>     A     */}
      </div>
      <div className="question">
        <p>Nested components are also called child components</p>
        <ul>
          <li>A. True</li>
          <li>B. False</li>
        </ul>
        {/* write your answer here =>      A    */}
      </div>
      <div className="question">
        <p>Nested components are also called child components</p>
        <ul>
          <li>A. True</li>
          <li>B. False</li>
        </ul>
        {/* write your answer here =>     A     */}
      </div>

      <div id="instructionsCopy">
        Now that you are finished with this, navigate to Comments.js file /
        component and read instruction there.
      </div>
    </>
  );
};

export default Instructions;
