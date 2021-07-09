(()=>{"use strict";function e(e,t){document.getElementById("main");let n=document.getElementById("error-msg");n&&n.remove(),function(){let e=document.getElementById("main"),t=document.getElementById("results");t&&t.remove(),t=document.createElement("div"),t.id="results",t.append("Loading..."),e.append(t)}(),fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units="+t+"&appid=09167145993a980df9291e4c17eda5b5").then((function(e){return e.json()})).then((function(e){!function(e,t){let n=document.getElementById("main"),i=document.getElementById("results");i&&i.remove(),i=document.createElement("div"),i.id="results";let d=document.createElement("div");d.id="results-left";let m=document.createElement("div");m.id="name",m.innerHTML=e.name;let a=document.createElement("div");a.id="description",a.innerHTML=e.description.toUpperCase();let r=document.createElement("div");r.id="temp";let c="C";"imperial"==t&&(c="F"),r.innerHTML=e.temp+"°"+c;let l=document.createElement("div");l.id="min-max-temp",l.innerHTML="Min: "+e.minTemp+"° | Max: "+e.maxTemp+"°";let o=document.createElement("div");o.id="results-right";let u=document.createElement("div");u.id="time";let p=new Date;u.innerHTML=p.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});let s=document.createElement("div");s.id="feels-like",s.innerHTML="Feels Like: "+e.feelsLike+"°"+c;let E=document.createElement("div");E.id="humidity",E.innerHTML="Humidity: "+e.humidity+"%";let v=document.createElement("div");v.id="wind",v.innerHTML="Wind: "+e.wind+" mph",d.append(m,a,r,l),o.append(u,s,E,v),i.append(d,o),n.append(i)}(function(e){return{name:e.name,description:e.weather[0].description,temp:Math.round(parseFloat(e.main.temp)),minTemp:Math.round(parseFloat(e.main.temp_min)),maxTemp:Math.round(parseFloat(e.main.temp_max)),feelsLike:Math.round(parseFloat(e.main.feels_like)),humidity:e.main.humidity,wind:e.wind.speed}}(e),t)})).catch((function(e){!function(){let e=document.getElementById("results");e&&e.remove();let t=document.createElement("div");t.id="error-msg",t.innerHTML="Could not find location.",main.insertBefore(t,main.childNodes[1])}()}))}!function(){let t=document.getElementById("container"),n=document.createElement("div");n.id="header";let i=document.createElement("a");i.id="title",i.innerHTML="Weather App",i.addEventListener("click",(()=>{m.reload()})),n.append(i);let d=document.createElement("div");d.id="main";let m="",a="metric",r=document.createElement("div"),c=document.createElement("input"),l=document.createElement("div");r.id="search-bar",c.id="search-box",l.id="search-btn",c.setAttribute("type","text"),l.innerHTML="Search",c.addEventListener("keyup",(function(t){"Enter"==t.key&&(m=c.value,e(m,a))})),l.addEventListener("click",(()=>{m=c.value,e(m,a)})),r.append(c,l);let o=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div");o.id="units-bar",u.innerHTML="° C",p.innerHTML="° F",u.style.background="rgba(64,64,64,.75)",p.style.background="rgba(0,0,0,.75)",u.addEventListener("click",(()=>{"metric"!=a&&(u.style.background="rgba(64,64,64,.75)",p.style.background="rgba(0,0,0,.75)",a="metric",e(m,a))})),p.addEventListener("click",(()=>{"imperial"!=a&&(u.style.background="rgba(0,0,0,.75)",p.style.background="rgba(64,64,64,.75)",a="imperial",e(m,a))})),o.append(u,p),d.append(r,o),t.append(n,d)}()})();