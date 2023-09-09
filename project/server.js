const {MongoClient} = require("mongodb");

const uri = "mongodb://127.0.0.1";
const client = new MongoClient(uri);  // client instance through this we can connect with the database

const data1 = {
    id: '2141',
    title: 'Added data',
    description: 'Hello Programmer',
    location: 'Hermannplatz 5-6, 10967 Berlin, Germany',
    lng: '0',
    lat: '0',
    userId: '4060',
    name: 'zubairi',
    isdeleted: false,
    profilePicture: 'Images/9b291404-bc2e-4806-88c5-08d29e65a5ad.png',
    videoUrl: null,
    images: null,
    mediatype: 0,
    imagePaths: null,
    feedsComment: 'Change By the Admin !',
    commentCount: '0',
    multiMedia: [
      {
        id: '3248',
        name: 'zubairi sheikh',
        description: null,
        url: 'http://www.youtube.com/embed/mPhboJR0Llc',
        mediatype: 5,
        likeCount: 0,
        place: 'Delhi',
        createAt: '0001-01-01T00:00:00'
      }
    ],
    likeDislike: { likes: '0', dislikes: '0', userAction: '2' },
    createdAt: '2020-01-02T13:32:16.7480006',
    code: '0',
    msg: null,
    price: 300,
    discountedPrice: null
}

const main = async () => {
    await client.connect();
    const db = client.db("shop");
    const collection = db.collection("products");
    // await collection.insertOne(data1);

    const data = await collection.find({price: {$eq: 200} }).limit(3).sort({id: 1}).toArray()  // Our data is in the json format so we have to put toArray() function at the end
    console.log(data);
    return "Done";
}

main()
.then(console.log())
.catch((e) => console.log(e))
.finally(() => client.close())