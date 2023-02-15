function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tabactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tabactive";
}
document.getElementById("defaultOpen").click();



function openGallery(evt, cityName) {
  var i, gallerytabcontent, gallerytablinks;
  gallerytabcontent = document.getElementsByClassName("gallerytabcontent");
  for (i = 0; i < gallerytabcontent.length; i++) {
    gallerytabcontent[i].style.display = "none";
  }
  gallerytablinks = document.getElementsByClassName("gallerytablinks");
  for (i = 0; i < gallerytablinks.length; i++) {
    gallerytablinks[i].className = gallerytablinks[i].className.replace(" gallerytabactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " gallerytabactive";
}
document.getElementById("defaultGalleryOpen").click();



function openGalleryER(evt, cityName) {
  var i, gallerytabcontentER, gallerytablinksER;
  gallerytabcontentER = document.getElementsByClassName("gallerytabcontentER");
  for (i = 0; i < gallerytabcontentER.length; i++) {
    gallerytabcontentER[i].style.display = "none";
  }
  gallerytablinksER = document.getElementsByClassName("gallerytablinksER");
  for (i = 0; i < gallerytablinksER.length; i++) {
    gallerytablinksER[i].className = gallerytablinksER[i].className.replace(" gallerytabactiveER", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " gallerytabactiveER";
}
document.getElementById("defaultGalleryOpenER").click();