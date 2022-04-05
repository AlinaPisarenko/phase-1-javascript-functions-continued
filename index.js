function saturdayFun(activity) {
  if (activity) return `This Saturday, I want to ${activity}!`;
  else activity = "roller-skate";
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (someActivity) {
  if (someActivity) return `This Monday, I will ${someActivity}.`;
  else someActivity = "go to the office";
  return `This Monday, I will ${someActivity}.`;
};

function wrapAdjective(someString = "*") {
  return function (someAdjective = "special") {
    return `You are ${someString}${someAdjective}${someString}!`;
  };
}
wrapAdjective("%")("a dedicated programmer");
