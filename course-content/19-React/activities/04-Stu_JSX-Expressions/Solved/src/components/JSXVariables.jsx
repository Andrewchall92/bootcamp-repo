const name = 'Farley';
const thoughts = 'is amazing!!!';

function alsoFun(){
  return <p>{10 +10}</p>;
}

function JSXVariables() {

  function fun(){
    return <p>{2+2}</p>;
  }
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          <h1>Hi! My name is {name}</h1>
          {fun()}{alsoFun()}
          {console.log(typeof <div></div>)}
          {/* object */}
          {/* After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. */}
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
