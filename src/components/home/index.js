import React, { Component } from 'react';
import './index.less';
import history from 'src/config/history';


class Home extends Component {

  constructor(props) {
    super(props);
  }

  linkUrl(item){
      history.push("/"+item);
  }
  
  render() {
    let listArry = ["daike","world"]
    return (
      <div className="box">
        {
          listArry.map((item,index) =>
            <div className="list" key={index} onClick={this.linkUrl.bind(this,item)}>
              专栏{index+1}
            </div>
          )
        }
      </div>
    );
  }
}

export default Home;