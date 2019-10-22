

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('dist'));

app.use(express.json());
app.use(express.json({
  type: ['application/json', 'text/plain']
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//сервер на Express
//Поидее здесь должно быть много проверок,особенно для входа и регистрации
//Тк в основном работа велась с front , здесь все больше для теста
//Вход и регистрация возвращают sid пользователя = login+password
//GET запросы должны проверять sid , переданный в заголовке

app.get('/category', (req, res) => {
          const categories = [
            {categoryId: 'c1', categoryName: 'category 1'},
            {categoryId: 'c2', categoryName: 'category 2'},
            {categoryId: 'c3', categoryName: 'category 3'},
            {categoryId: 'c4', categoryName: 'category 4'},
            {categoryId: 'c5', categoryName: 'category 5'},
            {categoryId: 'c6', categoryName: 'category 6'},
            {categoryId: 'c7', categoryName: 'category 7'},
            {categoryId: 'c8', categoryName: 'category 8'},
            {categoryId: 'c9', categoryName: 'category 9'},
            {categoryId: 'c10', categoryName: 'category 10'}
          ];
              res.json(categories);
});


app.get(`/category/:id`, (req, res) => {
  const subcategories = [
    {subcategoryId:'s1', subcategoryName: 'subcategory 1'},
    {subcategoryId:'s2', subcategoryName: 'subcategory 2'},
    {subcategoryId:'s3', subcategoryName: 'subcategory 3'},
    {subcategoryId:'s4', subcategoryName: 'subcategory 4'},
    {subcategoryId:'s5', subcategoryName: 'subcategory 5'},
    {subcategoryId:'s6', subcategoryName: 'subcategory 6'},
    {subcategoryId:'s7', subcategoryName: 'subcategory 7'},
    {subcategoryId:'s8', subcategoryName: 'subcategory 8'}
  ];
  if(req.params.id!='')
      res.json(subcategories);
  else
      res.json('');
});





app.get('/products', (req, res) => {
  const products = [
    {productId: 'p1', productName: 'product1'},
    {productId: 'p2', productName: 'product2'},
    {productId: 'p3', productName: 'product3'},
    {productId: 'p4', productName: 'product4'},
    {productId: 'p5', productName: 'product5'},
    {productId: 'p6', productName: 'product6'},
    {productId: 'p7', productName: 'product7'},
    {productId: 'p8', productName: 'product8'},
    {productId: 'p9', productName: 'product9'},
    {productId: 'p10', productName: 'product10'},
    {productId: 'p11', productName: 'product11'},
    {productId: 'p12', productName: 'product12'}
  ];
      res.json(products);
});



app.get('/products/:id', (req, res) => {
  const products = [
    {productId: 'p1', productName: 'product for cat 1'},
    {productId: 'p2', productName: 'product for cat 2'},
    {productId: 'p3', productName: 'product for cat 3'},
    {productId: 'p4', productName: 'product for cat 4'},
    {productId: 'p5', productName: 'product for cat 5'}
  ];
      res.json(products);
});



app.post('/signup',(req,res, next)=>{

  const login=req.body.login;
  const password=req.body.password;
  const data ={
    user:{
      name: login,
      sid: login+password
    }
  };
    res.json(data);

});



app.post('/login',(req,res)=>{
   const login=req.body.login;
   const password=req.body.password;

   const data ={
     user:{
       name: login,
       sid: login+password
     }
   };

     res.json(data);
});






app.listen(8080, () => console.log(`Listening on port 8080`));
