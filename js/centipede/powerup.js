(function () {
  window.Centipede = window.Centipede || {};

  var Powerup = Centipede.Powerup = function (options) {
    Centipede.MovingObject.call(this, {
      pos: options.pos,
      game: options.game,
      vel: options.vel,
      radius: Centipede.squareSize / 3,
      color: options.color
    });
    this.gravitates = true;
    this.attribute = options.attribute;
    this.effect = options.effect;

    this.image = new Image();
    this.image.src = "./../images/centipede/powerup.svg";
  };

  Centipede.Util.inherits(Powerup, Centipede.MovingObject);

  Powerup.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Centipede.Ship) {
      otherObject.weapon[this.attribute] += this.effect;
      if (this.attribute === 'number') {
        Centipede.timers.push(
          setTimeout(function () {
            otherObject.weapon.number -= this.effect;
          }.bind(this), 20000)
        );
      }
      this.game.remove(this);
      if (this.color.charAt(1) === 'f') {
        Centipede.sfx.powerdown();
      } else {
        Centipede.sfx.powerup();
      }
    }
  };

  Powerup.prototype.draw = function(ctx){
    ctx.drawImage(this.image, this.pos[0], this.pos[1]);
  }

  Powerup.prototype.move = function () {
    this.bounceOffWall();
    Centipede.MovingObject.prototype.move.call(this);
  };
})();
