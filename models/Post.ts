class Product {
  id: any;
  title: string;
  question: string;
  description: string;
  latitude: number;
  longitude: number;
  userId: string;
  imageUrl: any;

  constructor(id: any,
    title:string,
    question:string,
    description:string,
    latitude:number,
    longitude:number,
    userId:string,
    imageUrl:any) {

    this.id = id;
    this.title = title;
    this.question = question;
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.userId = userId;
    this.imageUrl = imageUrl;
  }
}

export default Product;
