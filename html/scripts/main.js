var App = {
  debug: false,
  log: function(what)   { if(App.debug) { console.log(what); } },
  exists: function(el)  { if($(el).length > 0) { return true; } },

  init: function() {
    this.accordion();
  },
  accordion: function () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {

      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.classList.toggle("show");
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
  }

} || {};

;(function ($, window, undefined) {
  'use strict';

  $(document).ready(function() {
    App.init();
  });

})(jQuery, this);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL19zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNYLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2YsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDakUsRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2xFO0FBQ0EsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRztBQUNyQixFQUFFLEVBQUU7QUFDSixFQUFFLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLEdBQUc7QUFDM0QsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ1Y7QUFDQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QztBQUNBLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHO0FBQ3hDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzVDLFFBQVEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHO0FBQ3ZDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7QUFDbkMsVUFBVSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hCLFVBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQzVELFFBQVEsQ0FBQyxDQUFDO0FBQ1YsTUFBTSxHQUFHO0FBQ1QsSUFBSSxDQUFDO0FBQ0wsRUFBRSxDQUFDO0FBQ0g7QUFDQSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUc7QUFDUjtBQUNBLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO0FBQ2Y7QUFDQSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRztBQUNmLEVBQUUsR0FBRztBQUNMO0FBQ0EsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQXBwID0ge1xuICBkZWJ1ZzogZmFsc2UsXG4gIGxvZzogZnVuY3Rpb24od2hhdCkgICB7IGlmKEFwcC5kZWJ1ZykgeyBjb25zb2xlLmxvZyh3aGF0KTsgfSB9LFxuICBleGlzdHM6IGZ1bmN0aW9uKGVsKSAgeyBpZigkKGVsKS5sZW5ndGggPiAwKSB7IHJldHVybiB0cnVlOyB9IH0sXG5cbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY2NvcmRpb24oKTtcbiAgfSxcbiAgYWNjb3JkaW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY2NvcmRpb25cIik7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGFjY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgdmFyIHBhbmVsID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHBhbmVsLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KXtcbiAgICAgICAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfSBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59IHx8IHt9O1xuXG47KGZ1bmN0aW9uICgkLCB3aW5kb3csIHVuZGVmaW5lZCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgQXBwLmluaXQoKTtcbiAgfSk7XG5cbn0pKGpRdWVyeSwgdGhpcyk7Il19