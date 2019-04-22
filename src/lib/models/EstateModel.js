import SingleModel from "./SingleModel";
const imageNotFoundLink =
  "https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547";

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 부동산 모델을 위한 클래스
 */
export default class EstateModel {
  constructor(props) {
    this._estate = props;
  }

  toSimple() {
    const {
      contseq = 0,
      oimgurl = imageNotFoundLink,
      timgurl = imageNotFoundLink,
      likeyn = 0,
      area = "Unknown",
      newyn = "N",
      price = 0
    } = this._estate;

    this.estateId = contseq;
    this.imageLink = oimgurl;
    this.thumbnail = timgurl;
    this.likeCount = likeyn;
    this.area = area;
    this.isNew = newyn === "Y";
    this.price = price;
    return this;
  }

  toDetail() {
    const {
      contseq = 0,
      area = "Unknown",
      paddr = "Unknown",
      price = 0,
      newyn = "N",
      regdate = "Unknown",
      likeyn = 0,
      EMAIL = "Unknown",
      imglist = [],
    } = this._estate;

    this.estateId = contseq;
    this.likeCount = likeyn;
    this.area = area;
    this.address = paddr;
    this.regDate = regdate;
    this.isNew = newyn === "Y";
    this.price = price;
    this.email = EMAIL;
    this.imageList = imglist.map(img => {
      return {
        imageLink: img.OIMGURL,
        thumbnail: img.TIMGURL
      };
    });
    this.korDate = getKORDate(this.regDate);
    return this;
  }

  toSearch() {
    const {
      imgurl = imageNotFoundLink,
      imgurlth = imageNotFoundLink,
      name = "Unknown",
      area = "Unknown",
      price = 0,
      selltype = -1
    } = this._estate;

    this.imageLink = imgurl;
    this.thumbnail = imgurlth;
    this.buildingName = name;
    this.area = area;
    this.price = price;
    this.sellType = selltype;
    switch (this.sellType) {
      case 1:
        this.sellTypeName = "매매";
        break;
      case 2:
        this.sellTypeName = "전세";
        break;
      case 3:
        this.sellTypeName = "월세";
        break;
      case 4:
        this.sellTypeName = "기타";
        break;
      default:
        this.sellTypeName = "알수없음";

        break;
    }
  }
}

function getKORDate (regdate) {
  const year = parseInt(regdate.slice(0, 4));
  const month = parseInt(regdate.slice(4,6));
  const day = parseInt(regdate.slice(6,8));

  return `${year}년 ${month}월 ${day}일`;
}
