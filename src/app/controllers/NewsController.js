
class NewsController{
    
    //[GET] /news
    index(req, res){
        res.render('news');
    }

    //[GET] /new/:slug
    show(req, res){
        res.send('Hi this is NodeJs!');
    }
}

// exports(xuat ra ngoai)
module.exports = new NewsController;