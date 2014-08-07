var Counter = function(){
  this.count = 3;
};

Counter.prototype.decrement = function(){
  if (this.count > 0) {
    this.count -= 1;
  }
};


describe('Counter', function(){
  it("stops when it gets to zero", function(){
    var counter = new Counter();
    counter.count = 0;
    counter.decrement();

    expect(counter.count).toBe(0);
  });

  it("reduces the count by one", function(){
    var counter = new Counter();
    counter.decrement();
    expect(counter.count).toBe(2);
  });
});











function getDayName(){
  var days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  var now = new Date();
  var dayNum = now.getDay();
  return days[dayNum];
}

describe('getDayName()', function(){
  it("returns the day as a string", function(){
    // Wed, Aug 6, 2014
    var fakeTime = new Date(2014, 7, 6);
    var clock = sinon.useFakeTimers(fakeTime.getTime());

    expect(getDayName()).toBe('Wednesday');

    clock.restore();
  });
});












var LoadingMessage = function(){
  this.$el = $('<div>Now loading...</div>');
};

LoadingMessage.prototype.show = function(){
  this.$el.addClass('active');
};

LoadingMessage.prototype.hide = function(){
  this.$el.removeClass('active');
};

LoadingMessage.prototype.isVisible = function(){
  return this.$el.hasClass('active');
};


describe('LoadingMessage', function(){
  var message;

  beforeEach(function(){
    message = new LoadingMessage();
  });

  describe('.hide()', function(){
    it("makes the element invisible", function(){
      message.hide();
      expect(message.isVisible()).toBe(false);
    });
  });

  describe('.show()', function(){
    it("makes the element visible", function(){
      message.show();
      expect(message.isVisible()).toBe(true);
    });
  });
})
