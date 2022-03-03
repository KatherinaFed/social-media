const DEFAULT_CHAT_ID = 1;

export const initialStateChat = {
  chats: [
    {
      id: 1,
      userName: 'Dmitrii Z.',
      isOnline: true,
      userAvatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbmfTnzLGSXX6KgG-Xh5cWgIZvwBzHv6Esw&usqp=CAU',
    },
    {
      id: 2,
      userName: 'John Doe',
      isOnline: false,
      userAvatar:
        'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png',
    },
    {
      id: 3,
      userName: 'Kristin Smith',
      isOnline: false,
      userAvatar:
        'https://avatarfiles.alphacoders.com/242/thumb-1920-242300.jpg',
    },
    {
      id: 4,
      userName: 'Lizzy K.',
      isOnline: true,
      userAvatar: '',
    },
    {
      id: 5,
      userName: 'Alex',
      isOnline: true,
      userAvatar:
        'https://avatarfiles.alphacoders.com/168/thumb-1920-168291.png',
    },
    {
      id: 6,
      userName: 'Hanna T.',
      isOnline: false,
      userAvatar: '',
    },
  ],
  messages: [
    {
      id: 1,
      chatId: 1,
      userName: 'Dmitrii Z.',
      message: 'Hi! What`s up?',
      date: '14.FEB.2022, 17:02',
    },
    {
      id: 2,
      chatId: 1,
      userName: 'me',
      message: 'I`m fine, I got a job!)',
      date: '14.FEB.2022, 17:43',
    },
    {
      id: 3,
      chatId: 1,
      userName: 'Dmitrii Z.',
      message: 'Congratulations!',
      date: '14.FEB.2022, 17:50',
    },
    {
      id: 4,
      chatId: 2,
      userName: 'John Doe',
      message: 'Hallihallo! Kate, kommst du heute in den Ostblock?',
      date: '23.FEB.2022, 09:34',
    },
    {
      id: 5,
      chatId: 2,
      userName: 'John Doe',
      message: 'Ich komme, da gibt es viele neue Route =)',
      date: '23.FEB.2022, 09:34',
    },
    {
      id: 6,
      chatId: 2,
      userName: 'John Doe',
      message: 'Buchungslot um 12 Uhr)',
      date: '23.FEB.2022, 09:35',
    },
    {
      id: 7,
      chatId: 3,
      userName: 'me',
      message: 'Hey, Kris! Can you remind me what series you recommended me?',
      date: '26.FEB.2022, 15:06',
    },
    {
      id: 8,
      chatId: 3,
      userName: 'Kristin Smith',
      message: 'hi Kate! Of course! The Office. It`s best of the best)',
      date: '26.FEB.2022, 15:41',
    },
    {
      id: 9,
      chatId: 3,
      userName: 'me',
      message: 'Thank you very much, I`ll start watching tonight)',
      date: '26.FEB.2022, 15:46',
    },
    {
      id: 10,
      chatId: 4,
      userName: 'Lizzy K.',
      message: 'Kate, I can`t come today beacuse of feel really sick, sorry(',
      date: '15.JAN.2022, 10:37',
    },
    {
      id: 11,
      chatId: 4,
      userName: 'me',
      message: 'Noooo((',
      date: '15.JAN.2022, 10:55',
    },
    {
      id: 12,
      chatId: 4,
      userName: 'Lizzy K.',
      message: 'I call you later, ok?',
      date: '15.JAN.2022, 11:01',
    },
    {
      id: 13,
      chatId: 4,
      userName: 'me',
      message: 'Sure',
      date: '15.JAN.2022, 11:03',
    },
    {
      id: 14,
      chatId: 4,
      userName: 'Lizzy K.',
      message:
        'Hey! Today is a good and a sunny day! Because of your Birthday!! Happy Birthday my lovely dear! Love you!',
      date: '02.FEB.2022, 09:13',
    },
    {
      id: 15,
      chatId: 4,
      userName: 'me',
      message: 'Thank you veery much! Love you too! See you soon!',
      date: '02.FEB.2022, 09:13',
    },
    {
      id: 16,
      chatId: 5,
      userName: 'Alex',
      message: 'Hi Katherina! Did I tell you I have a new job?',
      date: '05.MAR.2022, 19:24',
    },
    {
      id: 17,
      chatId: 5,
      userName: 'me',
      message:
        'Hello Alex! Wow! What?!) It`s so cool) Glad for you. What kind of the job?',
      date: '05.MAR.2022, 19:33',
    },
    {
      id: 18,
      chatId: 5,
      userName: 'Alex',
      message:
        'Yeah, it`s really cool, I`m so glad) Now I`m a Senior Software Developer in Google =)',
      date: '05.MAR.2022, 19:35',
    },
    {
      id: 19,
      chatId: 5,
      userName: 'me',
      message: 'No way! It`s awesome)',
      date: '05.MAR.2022, 19:37',
    },
    {
      id: 20,
      chatId: 6,
      userName: 'me',
      message:
        'Hanna, do you want to walk after a lunch? I would like to smth discuss with you',
      date: '23.MAR.2022, 11:02',
    },
    {
      id: 21,
      chatId: 6,
      userName: 'Hanna T.',
      message: 'Sure!',
      date: '23.MAR.2022, 11:10',
    },
    {
      id: 22,
      chatId: 6,
      userName: 'me',
      message: 'See you!',
      date: '23.MAR.2022, 11:11',
    },
  ],
  currentChatId: DEFAULT_CHAT_ID,
};
