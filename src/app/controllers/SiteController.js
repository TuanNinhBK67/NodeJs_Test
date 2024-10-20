
class SiteController{
    
    //[GET] /news
    index(req, res){
        res.render('home');
    }

    //[GET] /search
    search(req, res){
        res.render('search');
    }
}

// exports(xuat ra ngoai)
module.exports = new SiteController;