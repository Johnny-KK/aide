'use strict';
module.exports = {
  types: [
    { value: 'Feat', name: '新增:    新的内容' },
    { value: 'Fix', name: '修复:    修复一个Bug' },
    { value: 'Remove', name: '废弃:    移除一个现有的功能' },
    { value: 'Doc', name: '文档:    变更的只有文档' },
    { value: 'Style', name: '格式:    空格, 分号等格式修复' },
    { value: 'Refactor', name: '重构:    代码重构,注意和特性、修复区分开' },
    { value: 'Perf', name: '性能:    提升性能' },
    { value: 'Test', name: '测试:    添加一个测试' },
    { value: 'Build', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: 'Revert', name: '回滚:    代码回退' },
    { value: 'Chore', name: '其他:    其他' },
  ],
  messages: {
    type: '选择一种你的提交类型:',
    subject: '短说明:\n',
    body: '长说明,使用"|"换行(可选):\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联的issue,例如:#31, #34(可选):\n',
    confirmCommit: '确定提交说明?(yes/no)',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['特性', '修复'],
  subjectLimit: 100,
  skipQuestions: ['scope'],
  footerPrefix: 'ISSUES REF:',
};
