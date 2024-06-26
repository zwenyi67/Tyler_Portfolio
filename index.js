
const html = document.getElementById('html');
const javascript = document.getElementById('javascript');
const laravel = document.getElementById('laravel');
const java = document.getElementById('java');
const sql = document.getElementById('sql');
const dsa = document.getElementById('dsa');
const mgmt = document.getElementById('mgmt');

const targetHtmlPercentage = 85;
const targetJsPercentage = 45;
const targetLaravelPercentage = 80;
const targetJavaPercentage = 65;
const targetSqlPercentage = 75;
const targetDsaPercentage = 45;
const targetMgmtPercentage = 55;

let htmlCounter = 0;
let jsCounter = 0;
let laravelCounter = 0;
let javaCounter = 0;
let sqlCounter = 0;
let dsaCounter = 0;
let mgmtCounter = 0;


const interval = setInterval(() => {
    if (htmlCounter == targetHtmlPercentage && jsCounter == targetJsPercentage && laravelCounter == targetLaravelPercentage
        && javaCounter == targetJavaPercentage && sqlCounter == targetSqlPercentage && dsaCounter == targetDsaPercentage && mgmtCounter == targetMgmtPercentage) {
        clearInterval(interval);
    } else {
        if (htmlCounter < targetHtmlPercentage) {
            htmlCounter++;
            html.innerHTML = htmlCounter + "%";
        }
        if (jsCounter < targetJsPercentage) {
            jsCounter++;
            javascript.innerHTML = jsCounter + "%";
        }
        if (laravelCounter < targetLaravelPercentage) {
            laravelCounter++;
            laravel.innerHTML = laravelCounter + "%";
        }
        if (javaCounter < targetJavaPercentage) {
            javaCounter++;
            java.innerHTML = javaCounter + "%";
        }
        if (sqlCounter < targetSqlPercentage) {
            sqlCounter++;
            sql.innerHTML = sqlCounter + "%";
        }
        if (dsaCounter < targetDsaPercentage) {
            dsaCounter++;
            dsa.innerHTML = dsaCounter + "%";
        }
        if (mgmtCounter < targetMgmtPercentage) {
            mgmtCounter++;
            mgmt.innerHTML = mgmtCounter + "%";
        }
    }
}, 27);



function setActive(event) {
    // Prevent the default anchor click behavior
    event.preventDefault();

    // Remove the active class from all nav items
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Add the active class to the clicked nav item
    event.currentTarget.parentNode.classList.add('active');

    // Scroll to the section corresponding to the clicked nav item
    var targetId = event.currentTarget.getAttribute('href').substring(1);
    var targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function () {
    let firstBox = document.getElementById('first-box');
    let secondBox = document.getElementById('second-box');
    let skillBox = document.getElementById('skill-box');

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                firstBox.classList.add('animate__fadeInDown');
                secondBox.classList.add('animate__fadeInUp');
            } else {
                firstBox.classList.remove('animate__fadeInDown');
                secondBox.classList.remove('animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(skillBox); 
});


document.addEventListener('DOMContentLoaded', function () {
    let home = document.getElementById('home');
    let profileBox = document.getElementById('profile-box');
    let profileImage = document.getElementById('profile-image');

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                profileBox.classList.add('animate__lightSpeedInRight');
                profileImage.classList.add('animate__bounceInDown');
            } else {
                profileBox.classList.remove('animate__lightSpeedInRight');
                profileImage.classList.remove('animate__bounceInDown');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(home); 
});

document.addEventListener('DOMContentLoaded', function () {
    let who = document.getElementById('who');
    let personal = document.getElementById('personal');
    let education = document.getElementById('education');

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                personal.classList.add('animate__bounceInLeft');
                education.classList.add('animate__bounceInRight');
            } else {
                personal.classList.remove('animate__bounceInLeft');
                education.classList.remove('animate__bounceInRight');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(who); 
});

document.addEventListener('DOMContentLoaded', function () {
    let fitnessguru = document.getElementById('fitnessguru');
    let fitnessgurubox = document.getElementById('fitnessgurubox');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fitnessguru.classList.add('animate__bounceInLeft');
            } else {
                fitnessguru.classList.remove('animate__bounceInLeft');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(fitnessgurubox); 
});

document.addEventListener('DOMContentLoaded', function () {
    let brainblitzbox = document.getElementById('brainblitzbox');
    let brainblitz = document.getElementById('brainblitz');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                brainblitz.classList.add('animate__bounceInRight');
            } else {
                brainblitz.classList.remove('animate__bounceInRight');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(brainblitzbox); 
});

document.addEventListener('DOMContentLoaded', function () {
    let tommorrowbox = document.getElementById('tommorrowbox');
    let tommorrow = document.getElementById('tommorrow');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tommorrow.classList.add('animate__bounceInLeft');
            } else {
                tommorrow.classList.remove('animate__bounceInLeft');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(tommorrowbox); 
});

document.addEventListener('DOMContentLoaded', function () {
    let unitbox = document.getElementById('unitbox');
    let unit = document.getElementById('unit');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                unit.classList.add('animate__bounceInRight');
            } else {
                unit.classList.remove('animate__bounceInRight');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(unitbox); 
});



// for skills section responsive

document.addEventListener('DOMContentLoaded', function () {
    let htmlBox = document.getElementById('htmlBox');
    let html = document.getElementById('html-box');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                html.classList.add('animate__bounceInLeft');
            } else {
                html.classList.remove('animate__bounceInLeft');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(htmlBox); 
});

document.addEventListener('DOMContentLoaded', function () {
    let javascriptBox = document.getElementById('javascriptBox');
    let javascript = document.getElementById('javascript-box');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                javascript.classList.add('animate__bounceInRight');
            } else {
                javascript.classList.remove('animate__bounceInRight');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(javascriptBox); 
});

document.addEventListener('DOMContentLoaded', function () {
    let laravelBox = document.getElementById('laravelBox');
    let laravel = document.getElementById('laravel-box');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                laravel.classList.add('animate__bounceInLeft');
            } else {
                laravel.classList.remove('animate__bounceInLeft');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(laravelBox); 
});

document.addEventListener('DOMContentLoaded', function () {
    let javaBox = document.getElementById('javaBox');
    let java = document.getElementById('java-box');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                java.classList.add('animate__bounceInRight');
            } else {
                java.classList.remove('animate__bounceInRight');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(javaBox); 
});
document.addEventListener('DOMContentLoaded', function () {
    let sqlBox = document.getElementById('sqlBox');
    let sql = document.getElementById('sql-box');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sql.classList.add('animate__bounceInLeft');
            } else {
                sql.classList.remove('animate__bounceInLeft');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(sqlBox); 
});

document.addEventListener('DOMContentLoaded', function () {
    let dsaBox = document.getElementById('dsaBox');
    let dsa = document.getElementById('dsa-box');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                dsa.classList.add('animate__bounceInRight');
            } else {
                dsa.classList.remove('animate__bounceInRight');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(dsaBox); 
});

document.addEventListener('DOMContentLoaded', function () {
    let mgmtBox = document.getElementById('mgmtBox');
    let mgmt = document.getElementById('mgmt-box');


    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mgmt.classList.add('animate__bounceInLeft');
            } else {
                mgmt.classList.remove('animate__bounceInLeft');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(mgmtBox); 
});







