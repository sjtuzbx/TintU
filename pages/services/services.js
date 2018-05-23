Page({
  data: {
    service: [{
      name: "棚拍服务",
      images: [{
        src: "../../images/logo.png",
        name: "A"
      }, {
        src: "../../images/logo.png"
      }, {
        src: "../../images/logo.png"
      }, {
        src: "../../images/logo.png"
      },]
    }, {
      name: "外拍服务",
      images: [{
        src: "../../images/logo.png"
      }, {
        src: "../../images/logo.png"
      }, {
        src: "../../images/logo.png"
      }, {
        src: "../../images/logo.png"
      },]
    },{
      name: "租赁服务",
      images: [{
        src: "../../images/logo.png"
      }, {
        src: "../../images/logo.png"
      }, {
        src: "../../images/logo.png"
      }, {
        src: "../../images/logo.png"
      },]
    }],
  },
  clickedImg: function (e) {
    console.log(e)
    console.log(e.target.dataset.name)
  }
})