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
      imgurl = imageNotFoundLink,
      imgurlth = imageNotFoundLink,
      likeyn = 0,
      area = "Unknown",
      newyn = "N",
      price = 0
    } = this._estate;

    this.estateId = newly.id;
    this.imageLink = imgurl;
    this.thumbnail = imgurlth;
    this.likeCount = likeyn;
    this.area = area;
    this.isNew = newyn === "Y";
    this.price = price;
  }

  toDetail() {
    const newly = new SingleModel(this._estate);
    const {
      likeyn = 0,
      area = "Unknown",
      newyn = "N",
      price = 0,
      name = "Unknown",
      selltype = -1,
      imglist = [],
      ...keyword
    } = this._estate;

    this.estateId = newly.id;
    this.likeCount = likeyn;
    this.area = area;
    this.isNew = newyn === "Y";
    this.price = price;
    this.buildingName = name;
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

    this.imageList = imglist.map(img => {
      return {
        imageLink: img.imgurl,
        thumbnail: img.imgurlth
      };
    });

    this.keyword = Object.values(keyword);
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
