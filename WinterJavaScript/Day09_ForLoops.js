//For Loops
for(let i=0;i<=5;i++){
    console.log(i);//prints 0-5
    console.log(`${i}`)//For Loop 0-5
  }
  for(let i=5;i>=0;i--){
    console.log(i);//prints 5-0
    console.log(`For Loop ${i}`)//For Loop 5-0
  }
  //We use loops to iterate through the arrays
  const todos=[
    {
      id:1,
      task:'take out the dog',
      isComplete:true
    },
    {
      id:2,
      task:'meeting',
      isComplete:true
    },
    {
      id:3,
      task:'doctor appt',
      isComplete:false
    }
  ]
  console.log(todos);
  console.log(todos[0]);//prints the first object inside the array
  /*
  [object Object] {
    id: 1,
    isComplete: true,
    task: "take out the dog"
  }
  */
  console.log(todos[0].id);//1
  console.log(todos[2].task);//"doctor appt"
  //LOOP THROUGH ARRAY
  for(let i=0;i<todos.length;i++){
    console.log(todos[i]);
  }
  