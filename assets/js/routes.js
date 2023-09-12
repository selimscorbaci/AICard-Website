
const pages = [
    `${location.pathname.split("servicepage.html")[0]}` + "servicepage.html",
    `${location.pathname.split("service-1.html")[0]}` + "service-1.html",
    `${location.pathname.split("service-2.html")[0]}` + "service-2.html",
    `${location.pathname.split("service-3.html")[0]}` + "service-3.html",
    `${location.pathname.split("aboutpage.html")[0]}` + "aboutpage.html",
    `${location.pathname.split("contactpage.html")[0]}` + "contactpage.html",
    `${location.pathname.split("index.html")[0]}` + "index.html",
    `${location.pathname.split("/")[0]}` + "index.html",
]

export const pageRoutes = {
    [pages[0]] :{
        "service":"servicepage.html",
        "about":"../aboutpage.html",
        "contact":"../contactpage.html",
    },
    [pages[1]]:{
        "service":"servicepage.html",
        "about":"../aboutpage.html",
        "contact":"../contactpage.html",
    },
    [pages[2]]:{
        "service":"servicepage.html",
        "about":"../aboutpage.html",
        "contact":"../contactpage.html",
    },
    [pages[3]]:{
        "service":"servicepage.html",
        "about":"../aboutpage.html",
        "contact":"../contactpage.html",
    },
    [pages[4]]:{
        "service":"services/servicepage.html",
        "about":"aboutpage.html",
        "contact":"contactpage.html",
    },
    [pages[5]]:{
        "service":"services/servicepage.html",
        "about":"aboutpage.html",
        "contact":"contactpage.html",
    },
    [pages[6] || pages[7]]:{
        "service":"pages/services/servicepage.html",
        "about":"pages/aboutpage.html",
        "contact":"pages/contactpage.html",
    },
};  