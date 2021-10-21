# P1

 (local) 請以 App_xx.js 顯示下圖片，繳交
- Chrome 截圖
- 目錄結構及App_xx部分內容截圖  (以學號後2碼來展開category內容，其他收起)
- App_xx.js code (程式碼，非圖片 )

![](https://i.imgur.com/eAbPLET.jpg)


![](https://i.imgur.com/LQAqe2m.png)

```js
import './App_xx.scss';

function App_xx() {
  return (
    <div>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/cvpntL1/hats.png"
              alt=""
            />
            <a href="./hats.html" className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/px2tCc3/jackets.png"
              alt=""
            />
            <a href="./jackets.html" className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/0jqHpnp/sneakers.png"
              alt=""
            />
            <a href="./sneakers.html" className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/GCCdy8t/womens.png"
              alt=""
            />
            <a href="./womens.html" className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/R70vBrQ/men.png"
              alt=""
            />
            <a href="./mens.html" className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App_xx;


```

---
# P2

 (local) 將 homepage 分成如下圖的components，Homepage_xx.js, Direcory_xx.js, MenuItem_xx.js，並且能夠正常顯示如第1題。繳交
- Chrome 截圖
- 目錄結構，要含所有用到的components 
- Homepage_xx.js code (程式碼，非圖片 )
- Directory_xx.js code
- MenuItem_xx.js code


