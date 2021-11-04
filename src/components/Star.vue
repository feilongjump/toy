<template>
  <div class="star slowest"></div>
  <div class="star moderate"></div>
  <div class="star fastest"></div>
</template>

<style>
.star {
  @apply fixed rounded-sm;
}
.fastest {
  width: 1px;
  height: 1px;
  animation: up 100s linear infinite;
  box-shadow: 581px 583px rgb(255 255 255 / 20%), 1232px 574px #fff, 1589px 1485px #fff,
    383px 978px #fff, 1000px 988px #fff, 783px 243px #fff, 1262px 1292px #fff, 1155px 1352px #fff,
    1723px 399px #fff, 1759px 1217px #fff, 1303px 408px #fff, 16px 936px #fff, 157px 839px #fff,
    264px 748px #fff, 517px 832px #fff;
}
.moderate {
  width: 2px;
  height: 2px;
  animation: up 150s linear infinite;
  box-shadow: 613px 559px rgb(255 255 255 / 20%), 1581px 542px #fff, 74px 337px #fff,
    383px 978px #fff, 646px 340px #fff, 1491px 1346px #fff, 1077px 997px #fff, 885px 1822px #fff,
    1977px 163px #fff, 23px 1648px #fff, 1352px 240px #fff, 1968px 1968px #fff, 1318px 1556px #fff,
    628px 645px #fff, 61px 1325px #fff, 896px 1062px #fff, 628px 836px #fff, 671px 544px #fff,
    32px 638px #fff, 395px 1729px #fff, 1758px 1925px #fff, 51px 911px #fff, 111px 858px #fff,
    359px 616px #fff, 370px 878px #fff;
}
.slowest {
  width: 3px;
  height: 3px;
  animation: up 200s linear infinite;
  box-shadow: 630px 528px rgb(255 255 255 / 20%), 1937px 1246px #fff, 1035px 1681px #fff,
    1328px 1024px #fff, 1272px 440px #fff, 737px 759px #fff, 847px 244px #fff, 773px 51px #fff,
    1661px 1673px #fff, 62px 483px #fff, 1397px 1486px #fff, 1774px 955px #fff, 1396px 431px #fff,
    1915px 1308px #fff, 1215px 1401px #fff, 406px 169px #fff, 782px 1737px #fff, 1395px 1694px #fff,
    306px 1683px #fff, 1146px 1375px #fff, 1647px 685px #fff, 1340px 1479px #fff, 591px 1387px #fff,
    1639px 199px #fff, 1479px 1655px #fff, 1843px 847px #fff, 1350px 1363px #fff, 862px 311px #fff,
    494px 1323px #fff, 1245px 664px #fff, 949px 1600px #fff, 929px 1390px #fff, 546px 345px #fff,
    1975px 674px #fff, 974px 1646px #fff, 1191px 427px #fff, 937px 1313px #fff, 1458px 836px #fff,
    654px 867px #fff, 248px 449px #fff, 1442px 824px #fff, 680px 1156px #fff, 213px 1220px #fff,
    295px 1287px #fff, 558px 1818px #fff, 1979px 503px #fff, 703px 649px #fff, 1999px 1696px #fff,
    993px 1652px #fff, 1220px 557px #fff, 377px 1791px #fff, 1477px 322px #fff, 325px 192px #fff,
    1902px 1210px #fff, 1319px 575px #fff, 765px 1177px #fff, 1467px 328px #fff, 532px 1569px #fff,
    481px 166px #fff, 1236px 239px #fff, 1887px 293px #fff, 1195px 991px #fff, 160px 1593px #fff,
    1997px 495px #fff, 1967px 209px #fff, 1138px 1980px #fff, 1567px 181px #fff, 22px 1377px #fff,
    1946px 423px #fff, 165px 1302px #fff, 87px 626px #fff, 202px 858px #fff, 323px 969px #fff,
    528px 614px #fff;
}

@keyframes up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2000px);
  }
}
</style>
