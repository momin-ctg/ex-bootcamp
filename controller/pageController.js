const contactPage = (req, res) => {
    res.render('pages.contact')
};

const servicePage = (req, res) => {
    res.render('pages.services')
};

module.exports={contactPage, servicePage};
