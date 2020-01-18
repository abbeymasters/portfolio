import dejabrewicon from '../src/assets/dejabrewicon.png';
import mindDrifticon from '../src/assets/mindDrifticon.png';
import tonechecklogo from '../src/assets/tonechecklogo.png';
import heartbotbbimage from '../src/assets/heartbotbbicon.png';

const portfolioItems = [
  {
    title: 'mindDrift',
    img: mindDrifticon,
    description: 'mindDrift is a mindful breathing app developed for those who need an easy, on-the-go way to focus on taking deep breaths and to practice being still.',
    techStack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/mindDrift/mind-drift-fe',
    frontEndUrl: 'https://mind-drift.netlify.com',
  },
  {
    title: 'HeartBotBB',
    img: heartbotbbimage,
    description: 'Healing Heart Bot is a Twitter bot designed to help you get through a breakup by sharing supportive messages when you tweet at it.',
    techStack: ['Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Healing-HeartBot/healing-heart-bot',
    frontEndUrl: 'http://heartbotbb.herokuapp.com/',
    otherUrl: 'https://twitter.com/heartbotbb'
  },
  {
    title: 'Tone Check',
    img: tonechecklogo,
    description: 'Leveraging the IBM Watson Tone Analyzer API, Tone Check provides users an empty slate to paste text, and in turn, gives them an analysis of that text.',
    techStack: ['JavaScipt', 'HTML', 'CSS', 'Express'],
    github: 'https://github.com/mood-mangoes/mood-mangoes.github.io',
    frontEndUrl: 'http://tone-check.herokuapp.com/'
  },
  {
    title: 'DejaBrew',
    img: dejabrewicon,
    description: 'DejaBrew utilizes Vanilla JavaScript, HTML and CSS to teach users how to make espresso-based coffee drinks. Users hone their skills in practice mode, and then move to play mode where they\'ll be timed.',
    techStack: ['JavaScipt', 'HTML', 'CSS'],
    github: 'https://github.com/team-caffeine/team-caffeine.github.io',
    frontEndUrl: 'https://team-caffeine.github.io',
  }
];

export default portfolioItems;
