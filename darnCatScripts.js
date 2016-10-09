$(function() {

var $cat = $('.cat');
var $item = $('.item');
var $shelf = $('.shelf');
// count items destroyed.
var counter = 0;
$('.counter').html( counter + ' items have been knocked off.');

//would need to add position().top if moving vertically also
//cat shoves item - will be changed to start on delay from click
  $cat.click(function () {
    //establish initial position of cat and item and space between
    const catOrigin = $cat.position().left;
    var itemOrigin = $item.position().left;
    var diff = (itemOrigin - catOrigin) + $cat.width();
    //cat should move the distance between the two plus width of cat
    $cat.animate( { left: diff }, 'slow', function() {
      if ($cat.position().left >= $item.position().left) {
        // &&
        //   ($cat.position().top <= ($item.position().top + $item.height() +1)) ||
        //    ($cat.position().top >= $item.position().top - $item.height() +1))
      //if cat hits item, cat pushes item some amount.
           $item.animate( {left: (Math.random() * 200) + $item.position().left} );
      //cat goes back to original position
           $cat.animate( {left: catOrigin}, 'slow');
      }
      //if item reaches edge of shelf, falls off - not perfect but good enough.
      if ((($item.position().left) + 111) >= $shelf.width()) {
        //to make the item fall off the shelf should switch to fall then disappear.
        counter++;
        $item.delay(200).animate( {top: '80%'}, {duration: 2000} ) && $item.fadeOut('slow') && setTimeout(function() {
        $item.remove();}, 3000);
      } console.log('fall');
      if (counter >= 10) {
        alert('You lose. \n The cat has knocked everything off. \n Time to clean up!');
          }
    });
  });


//this will let the player move the item back on to the shelf, if has not fallen off.
  $item.click(function() {
    $item.animate( {left:'-=100'} );
  });
//create an event that spawns more objects taken from an array?
//new items to be spawned.
var items = [
 'assets/ArdentrystInvItems/Ardentryst-annelplate.png',
 'assets/ArdentrystInvItems/Ardentryst-AnneludineLeggings.png',
 'assets/ArdentrystInvItems/Ardentryst-BlueHood.png',
 'assets/ArdentrystInvItems/Ardentryst-Broadsword.png',
 'assets/ArdentrystInvItems/Ardentryst-BronzeBattleAxe.png',
 'assets/ArdentrystInvItems/Ardentryst-BronzeBattleAxe2.png',
 'assets/ArdentrystInvItems/Ardentryst-BronzeBattleAxe3.png',
 'assets/ArdentrystInvItems/Ardentryst-BronzeGladius.png',
 'assets/ArdentrystInvItems/Ardentryst-Chemical.png',
 'assets/ArdentrystInvItems/Ardentryst-Chemical2.png',
 'assets/ArdentrystInvItems/Ardentryst-Crossbow.png',
 'assets/ArdentrystInvItems/Ardentryst-Crossbow2.png',
 'assets/ArdentrystInvItems/Ardentryst-Crossbow3.png',
 'assets/ArdentrystInvItems/Ardentryst-EnchantedSickle.png',
 'assets/ArdentrystInvItems/Ardentryst-EnchantedSickleb.png',
 'assets/ArdentrystInvItems/Ardentryst-EnchantedSicklec.png',
 'assets/ArdentrystInvItems/Ardentryst-frostrobe.png',
 'assets/ArdentrystInvItems/Ardentryst-frostskirt.png',
 'assets/ArdentrystInvItems/Ardentryst-GreenHood.png',
 'assets/ArdentrystInvItems/Ardentryst-gripboots.png',
 'assets/ArdentrystInvItems/Ardentryst-NeptheneFibreLeggings.png',
 'assets/ArdentrystInvItems/Ardentryst-nepthenevest.png',
 'assets/ArdentrystInvItems/Ardentryst-pendant.png',
 'assets/ArdentrystInvItems/Ardentryst-pendant2.png',
 'assets/ArdentrystInvItems/Ardentryst-pendant3.png',
 'assets/ArdentrystInvItems/Ardentryst-pendant4.png',
 'assets/ArdentrystInvItems/Ardentryst-pendant5.png',
 'assets/ArdentrystInvItems/Ardentryst-Potion.png',
 'assets/ArdentrystInvItems/Ardentryst-Potion2.png',
 'assets/ArdentrystInvItems/Ardentryst-Potion3.png',
 'assets/ArdentrystInvItems/Ardentryst-Potion4.png',
 'assets/ArdentrystInvItems/Ardentryst-PotionB.png',
 'assets/ArdentrystInvItems/Ardentryst-PotionB2.png',
 'assets/ArdentrystInvItems/Ardentryst-PotionB3.png',
 'assets/ArdentrystInvItems/Ardentryst-PotionB4.png',
 'assets/ArdentrystInvItems/Ardentryst-ring1.png',
 'assets/ArdentrystInvItems/Ardentryst-ring2.png',
 'assets/ArdentrystInvItems/Ardentryst-ring3.png',
 'assets/ArdentrystInvItems/Ardentryst-ring4.png',
 'assets/ArdentrystInvItems/Ardentryst-ring5.png',
 'assets/ArdentrystInvItems/Ardentryst-ring6.png',
 'assets/ArdentrystInvItems/Ardentryst-Shell.png',
 'assets/ArdentrystInvItems/Ardentryst-silverpouch.png',
 'assets/ArdentrystInvItems/Ardentryst-Skull.png',
 'assets/ArdentrystInvItems/Ardentryst-sorchat.png',
 'assets/ArdentrystInvItems/Ardentryst-sorcrobe.png',
 'assets/ArdentrystInvItems/Ardentryst-sorcskirt.png',
 'assets/ArdentrystInvItems/Ardentryst-StaffA.png',
 'assets/ArdentrystInvItems/Ardentryst-StaffB.png',
 'assets/ArdentrystInvItems/Ardentryst-StaffC.png',
 'assets/ArdentrystInvItems/Ardentryst-SteelCap.png',
 'assets/ArdentrystInvItems/Ardentryst-SteelGladius.png',
 'assets/ArdentrystInvItems/Ardentryst-SteelHalberd.png',
 'assets/ArdentrystInvItems/Ardentryst-SteelHalberd2.png',
 'assets/ArdentrystInvItems/Ardentryst-SteelHalberd3.png',
 'assets/ArdentrystInvItems/Ardentryst-SteelRoundHelm.png',
 'assets/ArdentrystInvItems/Ardentryst-Tongue.png',
 'assets/ArdentrystInvItems/Ardentryst-wingboots.png'
];

$('.item').on("remove", function (spawnItems) {
    alert("Element was removed");
})

var shelfWidth = $shelf.width;
var shelfHeight = $shelf.height;
var spawnInterval = 5000;

function spawnItems() {
  var xPos = Math.random() * ($shelf.width - $item.width) + 1;
  var yPos = Math.random() * ($shelf.height - $item.height) +1;
}
setInterval(spawnItems, 4000);

//to spawn when initial item falls



//end of on ready function
});

// keydown function
  // $(document).keydown(function(e) {
  //   switch (e.which) {
  //     case 39: //right arrow key
  //       count2++;
  //       var maxLeft = $(window).width() - (150 + ($('.box2').width()));
  //       if ($('.box2').position().left < maxLeft) {
  //         var diff = maxLeft - $('.box2').position().left;
  //         $('.box2').stop(false, true).animate({
  //           left: '+=' + (diff < stepSize ? diff : stepSize)
  //         });
  //       }
  //       break;
  //     case 90: //z key


