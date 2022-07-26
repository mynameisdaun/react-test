//TODO: 도메인으로 변경한다
const questions = [
	{
		wordId: '1',
		word: 'justify',
		choices: [
			'정당화하다',
			'그냥하다',
			'정확하다'
		],
		answer:'정당화하다'
	},
	{
		wordId: '2',
		word: 'haste',
		choices: [
			'서두름,급함',
			'싫어함',
			'빠른'
		],
		answer:'서두름,급함'
	}
];

const answers = [
	{
		wordId:'1',
		isCorrect:true,
	},
	{
		wordId:'2',
		isCorrect:false,
	}
]

export default questions;
export {answers};
