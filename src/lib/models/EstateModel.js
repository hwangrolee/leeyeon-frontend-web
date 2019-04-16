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
    const newly = new SingleModel(this._estate);
    const {
      id = 0,
      oimgurl = imageNotFoundLink,
      timgurl = imageNotFoundLink,
      likeyn = 0,
      area = "Unknown",
      newyn = "N",
      price = 0
    } = this._estate;

    this.estateId = id;
    this.imageLink = oimgurl;
    this.thumbnail = timgurl;
    this.likeCount = likeyn;
    this.area = area;
    this.isNew = newyn === "Y";
    this.price = price;
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
