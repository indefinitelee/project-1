$(function() {

  $cat = $('.cat');
  $shelf = $('.shelf')
  $item = $('.item');

  shelfWidth = $shelf.width;
  shelfHeight = $shelf.height;

  updateCounter()
  setItemLoops()
  // catAnimate()

  var spawnInterval = 5000;

  function spawnItem() {
    var xPos = Math.random() * ($shelf.width - $item.width) + 1;
    var yPos = Math.random() * ($shelf.height - $item.height) +1;
    // this needs to spawn items.
  }
  setInterval(spawnItem, 4000);
});

var $cat;
var $shelf;
var $item;
var shelfWidth;
var shelfHeight;
var counter = -1;

var catAnimate = (setInterval (function() {
    const catOrigin = $cat.position().left;
    var itemOrigin = $item.position().left;
    var diff = (itemOrigin - catOrigin) + $cat.width();

     $cat.animate( { left: diff }, 1000)
     // compare cat and item positions.
       if ($cat.position().left < $item.position().left) {
          $item.delay(600).animate( {left: (Math.random() * 200) + $item.position().left} );
          $cat.animate( {left: catOrigin}, 'slow');
        };
       // if it's off the page, it falls
       if ((($item.position().left) + 111) >= $shelf.width()) {
          $item.delay(200).animate( {top: '80%'}, {duration: 1500} ) &&
          $item.fadeOut('slow') &&
          setTimeout(function() { $item.remove(); updateCounter(); playerLoses();}, 2500);
        };
      // check for loss
      // checkGameStatus()
    }, 2000));



var updateCounter = function() {
  counter++
  $('.counter').html( counter + ' items have been knocked off.');
}

var checkGameStatus = function() {
  var playerLost = checkForLoss()
  var playerWon = checkForWin()

  if (playerLost) {
    playerLoses();
  } else if (playerWon) {
    playerWins();
  }
};

// if you pass this a set of items on the page you made with .item,
// it will attach a click to each one.
var setItemLoops = function() {
  itemElements = $(".item")

  for (var item of itemElements) {
    setElementClick($(item))

    $(item).on("remove", function () {
      alert("Element was removed");
    });
  }
}

var setElementClick = function (element) {
  element.click(function() {
    element.animate( {left:'-=100'} );
    // checkGameStatus()
  });
}

var checkForLoss = function() {
  // check win condition
  counter > 9;
};

var playerLoses = function() {
  window.confirm("You lost. Click OK to reload the page and try again.");
  window.location.href='https://indefinitelee.github.io/project-1/';
};

var playerWins = function() {
  alert("ya won, great job");
};

var checkForWin = function() {
  // all items are off the screen and the cat can't cause more chaos
};

const items = [
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
 'assets/ArdentrystInvItems/Ardentryst-Crossbow2.png'
];

// const items = [
//  'assets/ArdentrystInvItems/Ardentryst-annelplate.png',
//  'assets/ArdentrystInvItems/Ardentryst-AnneludineLeggings.png',
//  'assets/ArdentrystInvItems/Ardentryst-BlueHood.png',
//  'assets/ArdentrystInvItems/Ardentryst-Broadsword.png',
//  'assets/ArdentrystInvItems/Ardentryst-BronzeBattleAxe.png',
//  'assets/ArdentrystInvItems/Ardentryst-BronzeBattleAxe2.png',
//  'assets/ArdentrystInvItems/Ardentryst-BronzeBattleAxe3.png',
//  'assets/ArdentrystInvItems/Ardentryst-BronzeGladius.png',
//  'assets/ArdentrystInvItems/Ardentryst-Chemical.png',
//  'assets/ArdentrystInvItems/Ardentryst-Chemical2.png',
//  'assets/ArdentrystInvItems/Ardentryst-Crossbow.png',
//  'assets/ArdentrystInvItems/Ardentryst-Crossbow2.png',
//  'assets/ArdentrystInvItems/Ardentryst-Crossbow3.png',
//  'assets/ArdentrystInvItems/Ardentryst-EnchantedSickle.png',
//  'assets/ArdentrystInvItems/Ardentryst-EnchantedSickleb.png',
//  'assets/ArdentrystInvItems/Ardentryst-EnchantedSicklec.png',
//  'assets/ArdentrystInvItems/Ardentryst-frostrobe.png',
//  'assets/ArdentrystInvItems/Ardentryst-frostskirt.png',
//  'assets/ArdentrystInvItems/Ardentryst-GreenHood.png',
//  'assets/ArdentrystInvItems/Ardentryst-gripboots.png',
//  'assets/ArdentrystInvItems/Ardentryst-NeptheneFibreLeggings.png',
//  'assets/ArdentrystInvItems/Ardentryst-nepthenevest.png',
//  'assets/ArdentrystInvItems/Ardentryst-pendant.png',
//  'assets/ArdentrystInvItems/Ardentryst-pendant2.png',
//  'assets/ArdentrystInvItems/Ardentryst-pendant3.png',
//  'assets/ArdentrystInvItems/Ardentryst-pendant4.png',
//  'assets/ArdentrystInvItems/Ardentryst-pendant5.png',
//  'assets/ArdentrystInvItems/Ardentryst-Potion.png',
//  'assets/ArdentrystInvItems/Ardentryst-Potion2.png',
//  'assets/ArdentrystInvItems/Ardentryst-Potion3.png',
//  'assets/ArdentrystInvItems/Ardentryst-Potion4.png',
//  'assets/ArdentrystInvItems/Ardentryst-PotionB.png',
//  'assets/ArdentrystInvItems/Ardentryst-PotionB2.png',
//  'assets/ArdentrystInvItems/Ardentryst-PotionB3.png',
//  'assets/ArdentrystInvItems/Ardentryst-PotionB4.png',
//  'assets/ArdentrystInvItems/Ardentryst-ring1.png',
//  'assets/ArdentrystInvItems/Ardentryst-ring2.png',
//  'assets/ArdentrystInvItems/Ardentryst-ring3.png',
//  'assets/ArdentrystInvItems/Ardentryst-ring4.png',
//  'assets/ArdentrystInvItems/Ardentryst-ring5.png',
//  'assets/ArdentrystInvItems/Ardentryst-ring6.png',
//  'assets/ArdentrystInvItems/Ardentryst-Shell.png',
//  'assets/ArdentrystInvItems/Ardentryst-silverpouch.png',
//  'assets/ArdentrystInvItems/Ardentryst-Skull.png',
//  'assets/ArdentrystInvItems/Ardentryst-sorchat.png',
//  'assets/ArdentrystInvItems/Ardentryst-sorcrobe.png',
//  'assets/ArdentrystInvItems/Ardentryst-sorcskirt.png',
//  'assets/ArdentrystInvItems/Ardentryst-StaffA.png',
//  'assets/ArdentrystInvItems/Ardentryst-StaffB.png',
//  'assets/ArdentrystInvItems/Ardentryst-StaffC.png',
//  'assets/ArdentrystInvItems/Ardentryst-SteelCap.png',
//  'assets/ArdentrystInvItems/Ardentryst-SteelGladius.png',
//  'assets/ArdentrystInvItems/Ardentryst-SteelHalberd.png',
//  'assets/ArdentrystInvItems/Ardentryst-SteelHalberd2.png',
//  'assets/ArdentrystInvItems/Ardentryst-SteelHalberd3.png',
//  'assets/ArdentrystInvItems/Ardentryst-SteelRoundHelm.png',
//  'assets/ArdentrystInvItems/Ardentryst-Tongue.png',
//  'assets/ArdentrystInvItems/Ardentryst-wingboots.png'
// ];
