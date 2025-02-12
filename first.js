// var http = require('http');
// var dt = require('./firstModule');
// var url = require('url');
// var fs = require('fs');
// http.createServer(function(req,res){
//     fs.readFile('product.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
//     // res.write('Hello World!!'+dt.myDateTime());
//     // var q = url.parse(req.url, true).query;
//     // var txt = q.year+" "+ q.month;
//     // res.end(txt);
// }).listen(8080);

// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:


// -->url module & events
// http.createServer(function(req,res){
//     var q = url.parse(req.url,true);
//     var filename="."+q.pathname;
//     var rs = fs.createReadStream(filename);
//     rs.on('open',function(){
//         console.log('The file is open')
//     })
//     fs.readFile(filename,function(err,data){
//         if(err){
//             res.writeHead(404,{'Content-Type':'text/html'});
//             return res.end("404 Not Found");
//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080);


// -->Upload files
// import http from 'http';
// import formidable from 'formidable';
// http.createServer(function(req,res){
//     if(req.url == '/fileupload'){
//         var form = new formidable.IncomingForm();
//         form.parse(req,function(err,fields,files){
//             res.write('File uploaded');
//             res.end();
//         });
//     } else {
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
//         res.write('<input type="file" name="fileupload"><br>')
//         res.write('<input type="submit">')
//         res.write('</form>')
//         return res.end()
//     }
// }).listen(8080);


// -->Send email from server
// import nodemailer from 'nodemailer';
// var transporter = nodemailer.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     auth:{
//         user:'apal40438@gmail.com',
//         pass:'0061'
//     }
// });
// var mailOptions={
//     from:'testdev25@yopmail.com',
//     to:'testdev259@yopmail.com',
//     subject:'My first mail',
//     text:'Congrats! you have successfully sent your first mail from server! :-D'
// };
// transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Email sent: '+info.response)
//     }
// });

// -->MySQL Connection and queries
import mysql from 'mysql2';
import http from 'http';
import cors from 'cors';

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'crud'
});

// con.connect((err)=>{
//     if(err)throw err;
//     console.log('Connected!')
    // con.query('CREATE DATABASE crud',(err,result)=>{
    //     if(err) throw err;
    //     console.log("Database Created!")
        // var sql = 'CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), price VARCHAR(10), rating DECIMAL(2,1))';
        // con.query(sql, (err,result)=>{
        //     if(err) throw err;
        //     console.log("Table Created!")
        // })
        // var insertColumn = `INSERT INTO products (title, description, price, rating) VALUE ('Divine Arts Solid Sheesham Wood 5 Seater Sofa Set For Living Room / Office| Fabric 3+1+1 Fabric 3 + 1 + 1 Sofa Set  (Honey Finish, DIY(Do-It-Yourself))',
        //         'Elegantly styled, this sofa set makes for a great addition to your home. The set has an extremely modern and contemporary look that helps you set up a stylish sofa set space in your home.',
        //         '25,575',
        //         '4.2')`;
        // var values =[
        //     [
        //         'realme P2 Pro',
        //         'Experience unparalleled visual brilliance with the realme P2 Pro’s 120Hz Curved AMOLED Display. This screen boasts a bright and eye-friendly technology, ensuring vibrant colours and deep contrasts for an immersive viewing experience.',
        //         '17,999',
        //         '4.4'
        //     ],
        //     [
        //         'Nothing Phone(2a)',
        //         'Phone (2a) is fuelled by the custom Dimesity 7200 Pro chipset. Co-engineered between Nothing and MediaTek to deliver the best performance with optimal power consumption.',
        //         '20,999',
        //         '4.5'
        //     ],
        //     [
        //         'Boult W20 with Zen ENC Mic, 35H Battery Life, Low Latency Gaming, Made in India, 5.3v Bluetooth  (Space Black, True Wireless)',
        //         `Carry your Pocket Pulse wherever you go - Introducing Boult W20 earbuds.`,
        //         '908',
        //         '4.1'
        //     ],
        //     [
        //         'Dr. Morepen BG03 with 50 Strips Glucometer  (Black & Grey)',
        //         'Dr. Morepen BG03 with 50 Strips Glucometer  (Black & Grey)',
        //         '740',
        //         '4.2'
        //     ],
        //     [
        //         'SAMSUNG 23 L Auto Cook Programs, Child Safety Lock, Memory Feature, Deodorization Solo Microwave Oven  (MS23A3513AK, BLACK)',
        //         `Enjoy hassle-free cooking with the Samsung 23 L Solo Microwave Oven.`,
        //         '7,690',
        //         '4.4'
        //     ],
        //     [
        //         'HOODWIN Walnut Finish Wooden Square Wall Hanging Planter Stand/Plant Shelf Wooden Wall Shelf  (Number of Shelves - 4, Brown)',
        //         `Introducing our exquisite Wood Wall Shelf – the perfect blend of elegance and functionality.`,
        //         '205',
        //         '3.6'
        //     ]
        // ]
        // var insert =`INSERT INTO products (title, description, price, rating) VALUE ?`;
        // con.query(insert,[values],(err,result)=>{
        //     if(err) throw err;
        //     console.log("Number of records inserted: " + result.affectedRows)
        // });
    // });
// });
// const createTable=()=>{
//     var sql = 'CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), price VARCHAR(10), rating DECIMAL(2,1), image VARCHAR(255))';
//         con.query(sql, (err,result)=>{
//             if(err) throw err;
//             console.log("Table Created!")
//         })
// }
const addProduct=(res,product)=>{
    var insert =`INSERT INTO products (title, description, price, rating, image) VALUE ("${product?.title}","${product?.description}","${product?.price}","${product?.rating}","${product?.image}")`;
    if(JSON.stringify(product) === "{}") {
        console.log("emptyy")
        res.send("Empty JSON");
    }else {
        con.query(insert,(err,result)=>{
            if(err) throw err;
            res.json({
                status: 200,
                message:"Product added successfully",
                data:product,
                statusText: "OK"
            });
        });
    }
}
const displayProducts=(res,displayQuery)=>{
    con.query(displayQuery,(err,result)=>{
        if(err) throw err;
        // res.writeHead(200,{'Content-Type':'application/json'})
        // res.write(JSON.stringify(result));
        res.json(result);
    });
}
const deleteProduct=(res,id)=>{
    con.query(`DELETE FROM products WHERE id = ${id}`,(err,result)=>{
        if(err) throw err;
        res.send("Product deleted successfully!")
    })
}
const updateProduct=(res,id,product)=>{
    const update = `
        UPDATE products
        SET 
            ${product?.title ?`title = "${product?.title},"` : ''}
            ${product?.description ? ` description = "${product?.description}",` : ''}
            ${product?.price ? ` price = "${product?.price},"` : ''}
            ${product?.rating ? ` rating = "${product?.rating},"` : ''}
            ${product?.image ? ` image = "${product?.image}"` : ''}
        WHERE id = ${id}`.replace(/,$/, '');
    con.query(update,(err,result)=>{
        if(err) throw err;
        // res.writeHead(200,{'Content-Type':'application/json'})
        res.send("Product updated successfully!")
    })
}
const addColumn=()=>{
    con.query('ALTER TABLE products ADD COLUMN image VARCHAR(255)',(err,result)=>{
        if(err) throw err;
        console.log("New column added!");
    })
}
// http.createServer((req,res)=>{
//     cors()(req,res,()=>{
//         con.connect((err)=>{
//             if(err) throw err;
//             displayTable(res);
//         });
//     })
// }).listen(8080);

import express from 'express';
import bodyParser from 'body-parser';

var app=express(); //instance
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const select = `SELECT * FROM products`;
// Defining route
app.get('/product',(req,res)=>{
    con.connect((err)=>{
                    if(err) throw err;
                    displayProducts(res,select);
                });
});
app.get('/product/:id',(req,res)=>{
    con.connect((err)=>{
        if(err) throw err;
        displayProducts(res,select+` WHERE id = ${req?.params?.id}`)
    })
})
app.post('/product',(req,res)=>{
    con.connect((err)=>{
        if(err) throw err;
        addProduct(res,req?.body)
    })
})
app.put('/product/:id',(req,res)=>{
    con.connect((err)=>{
        if(err) throw err;
        updateProduct(res,req?.params?.id,req?.body)
    })
})
app.delete('/product/:id',(req,res)=>{
    con.connect((err)=>{
        if(err) throw err;
        deleteProduct(res,req?.params?.id)
    })
})
// Start server
var server = app.listen(5000,()=>{
    console.log('server is running on localhost 5000');
});