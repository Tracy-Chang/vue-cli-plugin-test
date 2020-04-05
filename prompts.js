module.exports = [
  {
    type: 'list',
    name: 'choice',
    message: '请选择第一个 key',
    choices: [
      { name: 'choice1', value: 'choice1' },
      { name: 'choice2', value: 'choice2' }
    ],
    default: 'key1',
  },
  {
    type: 'input',
    name: 'path',
    message: '请输入 path 名称',
    default: 'path'
  },
  {
    when: answers => answers.choice === 'choice1',
    type: 'input',
    name: 'choice1name',
    message: '请输入 choice1 的名称',
    default: 'choice1'
  }
]
