//Single parameter funtion,
const getUserChoice = userInput =>
{
  //recalibrate user input to being completely lower case. for  sake of later comparison as ASCII values differ between cases
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || "paper" || "scissors" || 'bomb') 
  {
    return userInput;
  } 
  else 
  {
    console.log("Invalid Input");
    return false;
  }
};
function getComputerChoice() 
{
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) 
  {
    return "rock";
  } 
  else if (randomNumber === 1) 
  {
    return "paper";
  } 
  else 
  {
    return "scissors";
  };
}
  function detrermineWinner(userChoice, computerChoice)
  {
    {
    if (userChoice === computerChoice)
      return console.log('Tie!');
    }
    {
    if (userChoice === 'bomb')
      return console.log('User won!');
    }
    {
      if (userChoice === 'rock')
      {
        if (computerChoice === 'paper')
        {
          return console.log('Computer won!');
        }
        else
        {
          return console.log('User won!');
        }
      }
    }
    {
      if (userChoice === 'paper')
      {
        if (computerChoice === 'scissors')
        {
          return console.log('Computer won!');
        }
        else
        {
         return console.log('User won!');
        }
      }
    }
    {
      if (userChoice === 'scissors')
      {
        if (computerChoice === 'rock')
        {
          return console.log('Computer won!');
        }
        else
        {
          return console.log('User won!');
        }
      }
    }
  };
  function playGame(userChoice, computerChoice)
  {
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    detrermineWinner(userChoice, computerChoice);
  }
  playGame('bomb', 'scissors');
