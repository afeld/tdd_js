var count = 3;
function decrement(){
  count -= 1;
}


describe('decrement()', function(){
  it("reduces the count by one", function(){
    decrement();
    expect(count).toBe(2);
  });

  it("stops when it gets to zero");
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

xdescribe('getDayName()', function(){
  it("returns the day as a string", function(){
    expect(getDayName()).toBe('Thursday');
  });
});












var LoadingMessage = function(){
  this.$el = $('#loading');
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


var message = new LoadingMessage();


xdescribe('LoadingMessage', function(){
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
