$(document).ready(function () {





  //hover effect of Menu
  $("#bio").hover(function () {
    $("#bio").css(
      {
        opacity: '0.2',
        cursor: 'pointer'
      });

  }, function () {
    $("#bio").css(
      {
        opacity: '1',
      });

  });

  $("#personal").hover(function () {
    $("#personal").css(
      {
        opacity: '0.2',
        cursor: 'pointer'


      });

  }, function () {
    $("#personal").css(
      {
        opacity: '1',
      });
  });

  $("#commercial").hover(function () {
    $("#commercial").css(
      {
        opacity: '0.2',
        cursor: 'pointer'


      });

  }, function () {
    $("#commercial").css(
      {
        opacity: '1',
      });
  });


  $("#top-menu").hover(function () {
    $("#top-menu").css(
      "opacity", "1"
    );
    $("#scene3d").css(
      "margin-top", "-10vmin"
    );


  }, function () {
    $("#top-menu").css(
      "opacity", "0.0001"
    );
    $("#scene3d").css(
      "margin-top", "-1vmin"
    );


  });


  $("#scene3d").hover(function () {
    $("#scene3d").css(
      {
        cursor: pointer
      });

  }, function () {
    $("#scene3d").css(
      {
        cursor: auto
      });
  });

   //click to switch of personal and commercial
   $("#personal").click(function () {
    $("#photodrawer-1, #photodrawer-2, #photodrawer-3").css(
      {
        display: 'flex',        
      });

      $("#photodrawer-4, #photodrawer-5, #photodrawer-6").css(
        {
          display: 'none',        
        });

  });

  $("#commercial").click(function () {
    $("#photodrawer-4, #photodrawer-5, #photodrawer-6").css(
      {
        display: 'flex',        
      });

      $("#photodrawer-1, #photodrawer-2, #photodrawer-3").css(
        {
          display: 'none',        
        });

  });

    //click to toggle the left bio text
    $("#bio").click(function () {
      $("#left-statement-text").toggle();
    });


  //Hover effect of colorful drawers

  $("#bio").hover(function () {
    $("#bio").css(
      {
        top: '20vmin'
      });

  }, function () {
    $("#bio").css(
      {
        top: '0vmin'
      });


  });
  $("#photodrawer-1").hover(function () {
    $("#title-text-1").css(
      {
        display: 'block'
      });

    $("#thumbnail-text-1").css(
      {
        display: 'block',

      });


  }, function () {

    $("#thumbnail-text-1").css(
      {
        display: 'none'
      });

    $("#title-text-1").css(
      {
        display: 'none'
      });

  });


  $("#photodrawer-2").hover(function () {
    $("#photodrawer-1").css(
      {
        top: '5vmin'
      });
    $("#title-text-2").css(
      {
        display: 'block'
      });
    $("#thumbnail-text-2").css(
      {
        display: 'block'
      });


  }, function () {
    $("#photodrawer-1").css(
      {
        top: '0vmin'
      });
    $("#title-text-2").css(
      {
        display: 'none'
      });
    $("#thumbnail-text-2").css(
      {
        display: 'none'
      });
  });

  $("#photodrawer-3").hover(function () {
    $("#photodrawer-1, #photodrawer-2").css(
      {
        top: '5vmin'
      });
    $("#title-text-3").css(
      {
        display: 'block'
      });
    $("#thumbnail-text-3").css(
      {
        display: 'block'
      });


  }, function () {
    $("#photodrawer-1, #photodrawer-2").css(
      {
        top: '0vmin'
      });
    $("#title-text-3").css(
      {
        display: 'none'
      });
    $("#thumbnail-text-3").css(
      {
        display: 'none'
      });
  });

  $("#photodrawer-4").hover(function () {
    $("#title-text-4").css(
      {
        display: 'block'
      });



  }, function () {


    $("#title-text-4").css(
      {
        display: 'none'
      });

  });

  $("#photodrawer-5").hover(function () {
    $("#photodrawer-4").css(
      {
        top: '5vmin'
      });
    $("#title-text-5").css(
      {
        display: 'block'
      });



  }, function () {
    $("#photodrawer-4").css(
      {
        top: '0vmin'
      });
    $("#title-text-5").css(
      {
        display: 'none'
      });

  });

  $("#photodrawer-6").hover(function () {
    $("#photodrawer-4, #photodrawer-5").css(
      {
        top: '5vmin'
      });
    $("#title-text-6").css(
      {
        display: 'block'
      });


  }, function () {
    $("#photodrawer-4, #photodrawer-5").css(
      {
        top: '0vmin'
      });
    $("#title-text-6").css(
      {
        display: 'none'
      });

  });

});








