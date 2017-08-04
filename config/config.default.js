exports.keys = "sherman"
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
}

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.middleware = [
    'robot'
]

exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
}


// exports.security = {
//     csrf: false
// };

exports.logger = {
    consoleLevel: 'DEBUG',
    dir:'mylogs/egg_demo'
};

exports.graphql = {
  router: '/graphql',
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};