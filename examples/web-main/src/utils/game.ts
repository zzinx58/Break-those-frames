// 随机事件
const randomEventsFrom1To16: randomEvent[] = [
  {
    eventContent: "test1",
    firstChoiceContent: "yes",
    firstChoiceResult: "yes",
    firstChoiceChange: [0, 0, 0, 0, 0],
    secondChoiceContent: "no",
    secondChoiceResult: "no",
    secondChoiceChange: [0, 0, 0, 0, 0],
  },
  {
    eventContent: "test2",
    firstChoiceContent: "yes",
    firstChoiceResult: "yes",
    firstChoiceChange: [0, 0, 0, 0, 0],
    secondChoiceContent: "no",
    secondChoiceResult: "no",
    secondChoiceChange: [0, 0, 0, 0, 0],
  },
  {
    eventContent: "test3",
    firstChoiceContent: "yes",
    firstChoiceResult: "yes",
    firstChoiceChange: [0, 0, 0, 0, 0],
    secondChoiceContent: "no",
    secondChoiceResult: "no",
    secondChoiceChange: [0, 0, 0, 0, 0],
  },
];

// 获取随机事件
export function getRandomEvent(week: number): randomEvent {
  let randomEvents: randomEvent[];
  if (week <= 4) {
    randomEvents = randomEventsFrom1To16;
  } else if (week <= 10) {
    randomEvents = randomEventsFrom1To16;
  } else if (week <= 12) {
    randomEvents = randomEventsFrom1To16;
  } else {
    randomEvents = randomEventsFrom1To16;
  }
  return randomEvents[Math.floor(Math.random() * randomEvents.length)];
}
