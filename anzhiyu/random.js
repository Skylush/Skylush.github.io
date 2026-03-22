var posts=["2026/02/24/DMIT LAX.AN5.Pro.TINY/","2026/03/15/【测评】【RFCHOST】【SG-Tier-1-International-Optimization-Network】【SG-T1ION-Pro】/","2026/03/05/bandwagonhost-NL/","2026/03/05/【测评】【DPNET】【budget-2】【Turkey】【建站机】/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };