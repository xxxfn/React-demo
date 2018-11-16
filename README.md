# git flow 工作流程

0. 安装 npm install -g git-flow-avh
1. 初始化， git flow init
2. 即不要再 master 上也代码，也不要再 develop 写代码
3. 写的代码需要放在相应的功能分支下。
  1. git flow feature start xxx
    1. feature/xxx
  2. 写你的 xxx 功能的代码  git add . git commit -m ''
  3. 功能完成之后，就可以 finish    git flow feature finish xxx

  ....


  ....


  ....


  .....

  ....


一些功能做完了，（login layout） 。就可以发版啦。
1. git flow release start test  // 发布一个 test版本
2. 就会给到测试，让他们去测试代码
