export const quotes = [
  'I see.',
  'I can’t write.',
  "I can't read.",
  'I like to watch TV.',
  'I’ve been here all my life.',
  'There will be growth in the spring.',
  'I would like to stay and work in my garden.',
  'This is just like television, only you can see much further.',
  'Have you looked outside and seen the snow? It’s very white.',
  'Mr. Thomas Franklin told me I must leave the old man’s house. He’s dead, you know.',
  'As long as the roots are not severed, all is well. And all will be well in the garden.',
  'In the garden, growth has its seasons.',
  'If the gardener does his job, everything will be fine.',
  'Some plants do well in the sun, and others grow better in the cool of the shade.',
  'It is possible for one side of the garden to be flooded, and the other side to be dry.',
  'It is the responsibility of the gardener to adjust to the bad seasons as well as enjoy the good ones.',
  'First comes spring and summer, but then we have fall and winter. And then we get spring and summer again.',
  'If you give your garden a lot of love, and if you work very hard and have a lot of patience, in the proper.',
  'It did hurt.',
  'I like to watch.',
  'You there? I’m here.',
  'I never needed money.',
  'If I see Rafael, I will relay your message.',
  'I’m going to work in the garden.',
  'Is there a TV upstairs? I like to watch.',
  'That was a very small room.',
  "All I've got left is that room upstairs.",
  'Good morning, Louise.',
  "Excuse me, I'm very hungry. Could you please give me some food?",
  "And then he told me to get my white ass out of there, or he'd cut it.",
  "I have no Claim. I don't even know what one looks like."
]

export function getRandomQuote (array) {
  return { quote: `${array[Math.floor(Math.random() * array.length)]}` }
}