Page({
  data: {
    content: '微信绑定内容',
    hiddencontent: '隐藏的内容',
    flag: false,
    num1: 1,
    num2: 2,
    user: {
      name: "spark",
      age: 18
    },
    users: [{
      name: "spark",
      age: 18
    }, {
      name: "spark2",
      age: 19
    }, {
      name: "spark3",
      age: 20
    }]
  },
  tapName: function(event) {
    console.log("hello world")
    console.log(event)
  }
})