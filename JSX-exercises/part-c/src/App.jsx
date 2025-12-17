import React from "react";
import ExerciseC1 from "./components/ExerciseC1";
import ExerciseC2 from "./components/ExerciseC2";
import ExerciseC3 from "./components/ExerciseC3";
import ExerciseC4 from "./components/ExerciseC4";
import ExerciseC5 from "./components/ExerciseC5";
import ExerciseC6 from "./components/ExerciseC6";
import ExerciseC7 from "./components/ExerciseC7";
import ExerciseC8 from "./components/ExerciseC8";
import ExerciseC9 from "./components/ExerciseC9";
import ExerciseC10 from "./components/ExerciseC10";
import ExerciseC11 from "./components/ExerciseC11";
import ExerciseC12 from "./components/ExerciseC12";
import ExerciseC13 from "./components/ExerciseC13";
import ExerciseC14 from "./components/ExerciseC14";
import ExerciseC15 from "./components/ExerciseC15";
import ExerciseC16 from "./components/ExerciseC16";
import ExerciseC17 from "./components/ExerciseC17";
import ExerciseC18 from "./components/ExerciseC18";
import ExerciseC19 from "./components/ExerciseC19";
import ExerciseC20 from "./components/ExerciseC20";
import ExerciseC21 from "./components/ExerciseC21";
import ExerciseC22 from "./components/ExerciseC22";
import ExerciseC23 from "./components/ExerciseC23";
import ExerciseC24 from "./components/ExerciseC24";
import ExerciseC25 from "./components/ExerciseC25";

function App() {
  return (
    <div>
      <h1>Part C – JSX Practice</h1>
      <ExerciseC1 />
      <ExerciseC2 />
      <ExerciseC3 />
      <ExerciseC4 />
      <ExerciseC5 />
      <ExerciseC6 />
      <ExerciseC7 />
      <ExerciseC8 />
      <ExerciseC9 />
      <ExerciseC10 />
      <ExerciseC11 tasks={[{id:1,title:"Task1"},{id:2,title:"Task2"}]} />
      <ExerciseC12 />
      <ExerciseC13 />
      <ExerciseC14 />
      <ExerciseC15 />
      <ExerciseC16 />
      <ExerciseC17 />
      <ExerciseC18 />
      <ExerciseC19 isAdmin={true} />
      <ExerciseC20 />
      <ExerciseC21 html={{ __html: "<strong>Safe HTML</strong>" }} />
      <ExerciseC22 name="Nurlan"/>
      <ExerciseC23 />
      <ExerciseC24 user={{name:"Aida"}} notifications={[{id:1}]} />
      <ExerciseC25 />
    </div>
  );
}

export default App;
