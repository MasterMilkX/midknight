var GameState = {
  preload: function(){
    this.game.load.image('castle_over', 'img/background.png');
    this.game.load.image('castle_battle', 'img/background_battle.png');
    this.load.spritesheet('knight_over', 'img/sprites/player_set.png', 32, 32, 28);
    this.load.spritesheet('knight_battle', 'img/sprites/player_battle.png', 96, 96, 12);
    
    this.game.load.image('attack', 'img/sprites/btn_attack.png');
    this.game.load.image('defend', 'img/sprites/btn_defend.png');
    this.game.load.image('item', 'img/sprites/btn_item.png');
    this.game.load.image('escape', 'img/sprites/btn_escape.png');
  },
  create: function(){
    //set scales for phone
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
    
    //set the background
    this.background = this.game.add.sprite(0,0, 'castle_battle');
    
    //set the player
    this.knight_battle = this.game.add.sprite(0, 80, 'knight_battle', 0);
    //this.knight.anchor.setTo(0.5,0.5);
    
      //animations
    this.knight_battle.animations.add('default', [0], 1, true);
    this.attack_anim = this.knight_battle.animations.add('attack', [4,5,6,7], 12, false);
    this.attack_anim.onComplete.add(this.backDefault, this);
    this.defend_anim = this.knight_battle.animations.add('defend', [1], 2, false);
    this.defend_anim.onComplete.add(this.backDefault, this);
    this.useItem_anim = this.knight_battle.animations.add('item', [8], 2, false);
    this.useItem_anim.onComplete.add(this.backDefault, this);
    this.faint_anim = this.knight_battle.animations.add('faint', [10, 11], 1, false);

    
    this.knight_battle.animations.play('default');
    
    //add buttons
    this.attack_btn = this.game.add.sprite(18, 235, 'attack');
    this.attack_btn.inputEnabled = true;
    this.attack_btn.events.onInputDown.add(this.knight_attack, this);
    
    this.defend_btn = this.game.add.sprite(122, 235, 'defend');
    this.defend_btn.inputEnabled = true;
    this.defend_btn.events.onInputDown.add(this.knight_defend, this);
    
    this.item_btn = this.game.add.sprite(18, 295, 'item');
    this.item_btn.inputEnabled = true;
    this.item_btn.events.onInputDown.add(this.knight_useItem, this);
    
    this.escape_btn = this.game.add.sprite(122, 295, 'escape');
    this.escape_btn.inputEnabled = true;
    this.escape_btn.events.onInputDown.add(this.knight_escape, this);
  },
  update: function(){
    
    
  },
  
  knight_attack: function(sprite, pointer){
    this.knight_battle.animations.play('attack');
  },
  knight_defend: function(sprite, pointer){
    this.knight_battle.animations.play('defend');
  },
  knight_useItem: function(sprite, pointer){
    this.knight_battle.animations.play('item');
  },
  knight_escape: function(sprite, pointer){
    this.knight_battle.animations.play('faint');
  },
  backDefault: function(sprite, animation){
    this.knight_battle.animations.play('default');
  }
  
};

var game = new Phaser.Game(224, 352, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');