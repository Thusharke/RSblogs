var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
    author : {
        id: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user"
        },
        username: String
    },
    createdAt : {type : Date ,default : Date.now},
    title : String,
    image : String,
    description : String
});

module.exports = mongoose.model("Blog",blogSchema);

// { "_id" : ObjectId("5f2ac0e0defe2310807fa2de"), "author" : "Thushar", "title" : "Night Sky", "image" : "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, sequi. Temporibus, rem fugiat. Sapiente ipsa voluptas dolores facilis modi officia nobis consequuntur sunt est id aliquid quisquam autem illum magni officiis, nihil eum doloremque culpa dolorum et porro ex! Vero iure expedita sint culpa ducimus! Perspiciatis illo laborum ut est.\r\n\r\n", "__v" : 0 }
// { "_id" : ObjectId("5f2ad7079624dc14dc3ff02a"), "author" : "Banu", "title" : "London", "image" : "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description" : "<b>Lorem ipsum</b>, dolor sit amet consectetur adipisicing elit. Sunt, repudiandae vitae. Suscipit modi aliquid sed totam, harum repellat, ut quos reprehenderit ipsam recusandae quisquam autem qui, porro mollitia maxime repudiandae omnis? Dolore, a omnis maiores exercitationem deleniti corporis quasi iure voluptatum perferendis, debitis quam soluta quas nemo nulla, beatae labore? ", "__v" : 0 }
// { "_id" : ObjectId("5f2ad8321b27e74ff818e627"), "author" : "Thushar", "title" : "Norway", "image" : "https://images.pexels.com/photos/135157/pexels-photo-135157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, sequi. Temporibus, rem fugiat. Sapiente ipsa voluptas dolores facilis modi officia nobis consequuntur sunt est id aliquid quisquam autem illum magni officiis, nihil eum doloremque culpa dolorum et porro ex! Vero iure expedita sint culpa ducimus! Perspiciatis illo laborum ut est.", "__v" : 0 }
// { "_id" : ObjectId("5f2ad87a1b27e74ff818e628"), "author" : "Thushar", "title" : "Dubai", "image" : "https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, sequi. Temporibus, rem fugiat. Sapiente ipsa voluptas dolores facilis modi officia nobis consequuntur sunt est id aliquid quisquam autem illum magni officiis, nihil eum doloremque culpa dolorum et porro ex! Vero iure expedita sint culpa ducimus! Perspiciatis illo laborum ut est.", "__v" : 0 }
// { "_id" : ObjectId("5f2ad8c21b27e74ff818e629"), "author" : "Banu", "title" : "Japan!", "image" : "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "description" : "This place is lit you should visit", "__v" : 0 }
// { "_id" : ObjectId("5f2ea0f5363acb0a2caa067d"), "author" : "Thushar", "title" : "Las vegas", "image" : "https://images.pexels.com/photos/2945692/pexels-photo-2945692.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "description" : "This place is lit you should visit", "__v" : 0 }