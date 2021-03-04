import React from 'react';
import './home.css'
import {tipLists,hotSites,musicData,commentsData,viewpagerLists,phoneData,acousticsData,cellphoneData,accessoriesData,footerServiceDate,liveData} from '@/data/home.js'
import  { Tabs, Carousel, Button } from 'antd';
const { TabPane } = Tabs;

const host = window.location.href.split('index')[0]

// 轮播图模板
function LunBoTu(props) {
  const listItems = props.viewpagerLists.map((item, index) =>
    <a href={host + item.path.path + '/index.html?query=' + item.path.query.product} key={index}>
      <img src={item.imgSrc} alt="" width='100%' />
    </a>
  )
  return (
    <Carousel>
      {listItems}
    </Carousel>
  )
}

// 产品列表模板
function ProductList(props) {
  const list = props.content
  const listItems = list.map((item, index) =>
    <div className='phone-content' key={index}>
      <a href={host + item.path + '/index.html?query=' + item.query}>
        <img src={item.imgSrc} alt="" />
        <div className='phone-info'>
          <p className='phone-products-name'>{item.name}</p>
          <p className='phone-slogan'><span>{item.dsc}</span></p>
          <p className='phone-price'><i>￥</i>{item.price}</p>
        </div>
      </a>
    </div>
  )
  return (
    <div className='section-box-row'>
      <div className='phone-list'>
        {listItems}
      </div>
    </div>
  )
}

// 图文列表宣传模板
function ListAd(props) {
  const list = props.list
  return (
    <div className='list-ad'>
      <a href={host + list[0].path + '/index.html?query=' + list[0].query} className='ad' style={{ background: list[0].color }}>
        <img src={list[0].imgSrc} alt="" />
        <div className='info'>
          <h4>{list[0].title}</h4>
          <p className='label'>{list[0].dsc}</p>
          <p className='price'><i>￥</i>{list[0].price}</p>
        </div>
      </a>
      <a href={host + list[1].path + '/index.html?query=' + list[1].query} className='ad' style={{ background: list[1].color }}>
        <div className='info'>
          <h4>{list[1].title}</h4>
          <p className='label'>{list[1].dsc}</p>
          <p className='price'><i>￥</i>{list[1].price}</p>
        </div>
        <img src={list[1].imgSrc} alt="" />
      </a>
    </div>
  )
}

/*热门标识*/ 
function HotTip(props) {
  const list = props.tipLists
  const listItems = list.map((item, index) =>
    <li key={index}>
      <img src={item.imgSrc} alt="" />
      {item.text}
    </li>
  )
  return (
    <div className='index-hot-tip'>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

/* 热门网站 */ 
function HotSite(props) {
  const list = props.hotSites
  const listItems = list.map((item, index) =>
    <li key={index}>
      <a href={item.path}>
        <img src={item.imgSrc} alt={item.name} />
        <span>{item.name}</span>
      </a>
    </li>
  )
  return (
    <div className='index-hot-site'>
      <ul>
        {listItems}
      </ul>
    </div>
  )

}

/*社区热贴列表*/ 
function CommentList(props) {
  const list = props.commentsData.content
  const listItems = list.map((item, index) =>
    <a href="/" className='comment-content' key={index}>
      <img src={item.imgSrc} alt="" width='100%' />
      <div className='comment-info'>
        <p>
          <img src={item.userimg} alt="" />
          {item.username}
        </p>
        <p className='comment-dsc'> {item.dsc}</p>
        <p className='comment-tip'>{item.name}</p>
      </div>
    </a>
  )
  return (
    <div className='comment-list'>
      {listItems}
    </div>
  )
}

/*通用底部*/ 
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      LangChoose: '简体中文',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChoose = this.handleChoose.bind(this)
  }
  handleClick() {
    this.setState({ click: !this.state.click })

  }
  handleChoose(Lang_name) {
    this.setState({
      click: !this.state.click,
      LangChoose: Lang_name
    })
  }

  render() {
    const LangChoose = this.state.LangChoose
    const Langslist = ['English', 'Русский', 'Türkiye', '简体中文']
    const listItems = Langslist.map((item, index) =>
      <li className='lang-choose-item' key={index} ref='LangChoose' onClick={() => { this.handleChoose(item) }}>
        <span className='lang-title'>{item}</span>
      </li>
    )

    return (
      <div className='footer'>
        <div className='footer-btns'>
          <Button type="primary" size='large' shape="round" >400-788-3333</Button>
          <Button type="primary" size='large' shape="round" >在线客服</Button>
        </div>
        <div className='footer-nav'>
          <div className='footer-copy'>
            <span>粤ICP备13003602号-2合字B2-20170010</span><br />
            <span>营业执照©2018 Meizu All rights reserved</span>
          </div>
          <div className='lang-choose-container' >
            <div className={this.state.click ? 'lang-choose-wrapper lang-choose-wrapper-active' : 'lang-choose-wrapper'}>
              <ul className={this.state.click ? 'lang-choose-list lang-choose-list-active ' : 'lang-choose-list '}>
                {listItems}
                <li className='lang-choose-item' onClick={this.handleClick}>
                  <span className='lang-title'>{LangChoose} <i className='icon-more'></i></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


// 推荐tabs 内容
class TuiJie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='TuiJie'>
        {/*热门标识*/}
        <HotTip tipLists={tipLists} />

        {/* 热门网站 */}
        <HotSite hotSites={hotSites} />

        {/* banner图片-宣传 */}
        <div className='index-banner'>
          <div className='row'>
            <div className='banner-lg'>
              <a href="/"><img src="https://fms.res.meizu.com/dms/2021/02/23/aef0a9ba-8eb6-4ed2-a222-ce01fd6ed394.jpg" alt="" /></a>
            </div>
          </div>
          <div className='row'>
            <div className='banner-lg'>
              <a href="/"><img src="https://fms.res.meizu.com/dms/2021/02/23/42bfe896-35f8-48d4-b50b-9d526039f870.jpg" alt="" /></a>
            </div>
            <div className='banner-lg'>
              <a href="/"><img src="https://fms.res.meizu.com/dms/2021/01/13/0536da98-603b-4e45-a0ce-63fbb91a3cef.jpg" alt="" /></a>
            </div>
          </div>
        </div>

        {/* 智能手机列表 */}
        <div className='section-phone-box'>
          <div className='section-title'><h3>{this.props.phoneData.titleName}</h3></div>
          <div className='sectioen-box-adv'>
            <a href={host + this.props.phoneData.head[0].path + '/index.html?query=' + this.props.phoneData.head[0].query}>
              <img src={this.props.phoneData.head[0].imgSrc} width='100%' alt="" />
            </a>
          </div>
          {/*手机列表 */}
          <ProductList content={this.props.phoneData.content} />
        </div>

        {/* 魅族声学列表 */}
        <div className='section-phone-box'>
          <div className='section-title'><h3>{this.props.musicData.titleName}</h3></div>
          {/* 图文列表宣传模板*/}
          <ListAd list={this.props.musicData.head} />
          {/*魅族声学列表 */}
          <ProductList content={this.props.musicData.content} />
        </div>

        {/* 社区热贴列表 */}
        <div className='section-phone-box'>
          <div className='section-title'><h3>{this.props.commentsData.titleName}</h3></div>
          {/*社区热贴列表 */}
          <CommentList commentsData={this.props.commentsData} />
        </div>

        {/* 返回顶部 */}
        <div className='index-back-center'>
          <a href="#head-search">
            <div>返回顶部</div>
          </a>
        </div>

        {/*底部*/}
        <Footer />

      </div>
    )
  }
}

// 推荐tab外其他的 tab 头部
function OtherTab(props) {
  const datalist = props.datalist

  return (
    <div>
      <a href={host + datalist.head[0].path + '/index.html?query=' + datalist.head[0].query}>
        <img src={datalist.head[0].imgSrc} alt="" width='100%' />
      </a>
      <ProductList content={datalist.content} />
    </div>
  )
}

// 推荐tab外其他的 tab 底部
function OtherFooter(props) {
  const list = props.phoneData.content
  // 底部推荐产品列表一行左右滚动
  const swiperlistItems = list.map((item, index) =>
    <div className={index + 1 === list.length ? 'swiper-li swiper-li-notmargin' : 'swiper-li'} key={index}>
      <a href={host + item.path + '/index.html?query=' + item.query} >
        <img src={item.imgSrc} alt="" width='100%' />
        <div className='info'>
          <p className='name'>{item.name}</p>
          <p className='price'><i>￥</i>{item.price}</p>
        </div>
      </a>
    </div>
  )
  // 底部产品服务
  const servicelist = props.footerServiceDate
  const servicelistItems = servicelist.map((item, index) =>
    <a href="/" key={index}>
      <img src={item.imgSrc} alt="" />
    </a>
  )

  return (
    <div className='other-footer'>
      <div className='section-phone-box'>
        <div className='section-title'><h3>为您推荐</h3></div>
      </div>
      <div className='footer-swiper-list'>
        {swiperlistItems}
      </div>

      <div className='footer-service'>
        {servicelistItems}
      </div>

      {/*通用底部*/}
      <Footer />
    </div>

  )
}


// 所有内容集合 
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '123' };
    this.callback = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e);
    const title = [
      '魅族官网 - 魅族 17 系列手机：如你，才华横溢',
      '手机 - 魅族官网',
      'Lipro - 魅族官网',
      '声学 - 魅族官网',
      '配件 - 魅族官网',
      '生活 - 魅族官网',
    ]
    const index = parseInt(e) - 1
    document.title = title[index]

  }

  render() {
    return (
      <div>
        <div id='head-search' className='head-search'>
          <div className='head-title'>meizu</div>
        </div>
        {/*Tabs标签*/}
        <div className='head-Tabs'>
          <Tabs defaultActiveKey="1" onChange={this.handleChange} centered>
            <TabPane tab="推荐" key="1">
              <LunBoTu viewpagerLists={viewpagerLists} />
              <TuiJie phoneData={phoneData} musicData={musicData} commentsData={commentsData} />
            </TabPane>
            <TabPane tab="手机" key="2">
              <OtherTab datalist={cellphoneData} />
              <OtherFooter phoneData={phoneData} footerServiceDate={footerServiceDate} />
            </TabPane>
            <TabPane tab="Lipro" key="3">
              <OtherTab datalist={cellphoneData} />
              <OtherFooter phoneData={phoneData} footerServiceDate={footerServiceDate} />
            </TabPane>
            <TabPane tab="声学" key="4">
              <OtherTab datalist={acousticsData} />
              <OtherFooter phoneData={phoneData} footerServiceDate={footerServiceDate} />
            </TabPane>
            <TabPane tab="配件" key="5">
              <OtherTab datalist={accessoriesData} />
              <OtherFooter phoneData={phoneData} footerServiceDate={footerServiceDate} />
            </TabPane>
            <TabPane tab="生活" key="6">
              <OtherTab datalist={liveData} />
              <OtherFooter phoneData={phoneData} footerServiceDate={footerServiceDate} />
            </TabPane>
          </Tabs>
        </div>

      </div>
    )
  }
}

export default HomePage;
