// XML news reader

$(function () {
  $.ajax({
    url: 'opensuse.xml', //change to: https://news.opensuse.org/feed/ once the page is on the opensuse Server
    dataType: "xml",
    success: function(xmldata) {
      $(xmldata).find('item').each(function(){
        $title = $(this).find('title').text();
        $link = $(this).find('link').text();
        $description = $(this).find('description').text();

        //insert the data in the slider

        $titleHTML = '<h3 class="opensuse-blue strong-title">'
                   + $title
                   + '</h3>';
        $linkHTML  = '<a href="'
                   + $link
                   + '">'
                   + $titleHTML
                   + '</a>';
        $descriptionHTML = '<p class="opensuse-blue">'
                         + $description
                         + '</p>';
        $newsSlider = '<div class="row">'
                    + '<div class="col-sm-8 col-sm-offset-2 text-center">'
                    + $linkHTML
                    + $descriptionHTML
                    + '</div>'
                    + '</div>';

        // add the items to the OWL carousel
        var owl = $('#owl-slide-news')

        owl.data('owlCarousel').addItem($newsSlider)

      })
    }
  })
});




