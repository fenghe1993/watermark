let watermark = {}

let setWatermark = (str, cwidth, cheight, divId) => {
  let id = 'watermartcanvas'
  if (document.getElementById(id) !== null) {
    document.getElementById('waterMark').removeChild(document.getElementById(id))
  }

  // 创建一个画布
  let can = document.createElement('canvas')
  // let can = document.getElementById(divId);
  // 设置画布的长宽
  can.width = cwidth
  can.height = cheight

  let cans = can.getContext('2d')
  // 旋转角度
  cans.rotate(-30 * Math.PI / 180)
  cans.font = '16px 微软雅黑'
  // 设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = 'rgba(255, 255, 255, 0.30)'
  // 设置文本内容的当前对齐方式
  cans.textAlign = 'bottom'
  // 设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'Middle'
  // 在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
  // cans.fillText(str, can.width / 10, can.height / 2);
  cans.fillText(str, 30, 90)
  for (let h = -1; h < 10; h++) {
    for (let w = -1; w < 10; w++) {
      cans.fillText(str, h * 300, w * 300)
    }
    h = h + 1
  }

  let div = document.createElement('div')
  div.id = id
  // div.style.pointerEvents = 'none';
  div.style.top = '0px'
  div.style.left = '0px'
  div.style.position = 'fixed'
  // div.style.zIndex = '1';
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  // document.body.appendChild(div);
  if (document.getElementById('waterMark') !== null) {
    document.getElementById('waterMark').appendChild(div)
  }
  return id
}

// 该方法只允许调用一次
watermark.set = (str, cwidth, cheight) => {
  setWatermark(str, cwidth, cheight)
  let id = setWatermark(str, cwidth, cheight)
  setTimeout(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(str, cwidth, cheight)
    }
  }, 500)
  // window.onresize = () => {
  //   setWatermark(str, cwidth, cheight);
  // };
}

export default watermark
